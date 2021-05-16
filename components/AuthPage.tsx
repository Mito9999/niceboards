import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../utils/auth";
import { emailRegex } from "../utils/contants";
import { firebaseAuthCodeToText } from "../utils/functions";

type Props = {
  type: "SignIn" | "SignUp";
};

export default function AuthPage({ type }: Props) {
  const auth = useAuth();

  const [message, setMessage] = useState<{
    type: "info" | "warning" | "success" | "error";
    text: string;
  }>({
    type: "info",
    text: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const handleSubmit = async () => {
    if (!emailRegex.test(email)) {
      setMessage({ type: "warning", text: "Invalid Email Address" });
      return;
    } else if (password.length < 8) {
      setMessage({
        type: "warning",
        text: "Password must be at least 8 characters",
      });
      return;
    }

    setLoading(true);
    if (type === "SignUp") {
      if (password === passwordConfirmation) {
        try {
          await auth.signup(email, password);
          setMessage({
            type: "info",
            text: "",
          });
        } catch (err) {
          setMessage({
            type: "error",
            text: firebaseAuthCodeToText(err.code, type),
          });
        }
      } else {
        setMessage({ type: "warning", text: "Passwords do not match" });
      }
    } else if (type === "SignIn") {
      try {
        await auth.signin(email, password);
        setMessage({
          type: "info",
          text: "",
        });
      } catch (err) {
        setMessage({
          type: "error",
          text: firebaseAuthCodeToText(err.code, type),
        });
      }
    }
    setLoading(false);
  };

  return (
    <Box
      display="flex"
      justify="center"
      align="center"
      height="calc(100vh - 83px)"
    >
      <Box
        w="500px"
        bgColor="gray.50"
        px={["4", "12"]}
        py={["8", "12"]}
        borderRadius="8"
        m="auto"
      >
        <Heading size="lg" textAlign="center">
          {type === "SignUp" ? "Sign Up" : "Sign In"}
        </Heading>
        {message.text.length > 0 && (
          <Alert status={message.type} mt="4">
            <AlertIcon />
            {message.text}
          </Alert>
        )}
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
          onClick={handleSubmit}
          isLoading={loading}
        >
          {type === "SignUp" ? "Sign Up" : "Sign In"}
        </Button>
        <Link href={`/${type === "SignUp" ? "signin" : "signup"}`}>
          <Text>
            {type === "SignUp" ? "Already" : "Don't"} have an account?{" "}
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
