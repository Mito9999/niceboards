import {
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
  Text,
} from "@chakra-ui/react";
import { useAuth } from "../utils/auth";
import { useState } from "react";
import Link from "next/link";

type Props = {
  type: "SignIn" | "SignUp";
};

export default function SignIn({ type }: Props) {
  const auth = useAuth();
  console.log(auth);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const handleSignUp = () => {
    if (password === passwordConfirmation) {
      auth.signup(email, password);
    }
  };

  return (
    <Box
      display="flex"
      justify="center"
      align="center"
      height="calc(100vh - 83px)"
    >
      <Box w="500px" bgColor="gray.50" p="12" borderRadius="8" m="auto">
        <Heading size="md" textAlign="center">
          {type === "SignUp" ? "Sign Up" : "Sign In"}
        </Heading>
        <FormControl id="email" mt="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" mt="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        {type === "SignUp" && (
          <FormControl id="password-confirmation" mt="4">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </FormControl>
        )}
        <Button
          colorScheme="red"
          my="8"
          w="100%"
          onClick={() =>
            type === "SignUp" ? handleSignUp() : auth.signin(email, password)
          }
        >
          {type === "SignUp" ? "Sign Up" : "Sign In"}
        </Button>
        <Link href={`/${type === "SignUp" ? "signin" : "signup"}`}>
          <Text>
            Already have an account?{" "}
            <Text
              as="span"
              cursor="pointer"
              color="red.500"
              fontWeight="600"
              _hover={{ textDecoration: "underline" }}
            >
              {type === "SignUp" ? "Sign In" : "Sign Up"}
            </Text>
          </Text>
        </Link>
      </Box>
    </Box>
  );
}
