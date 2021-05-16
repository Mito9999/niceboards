import {
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "../utils/auth";

export default function SignIn() {
  const auth = useAuth();
  console.log(auth);

  return (
    <Box
      display="flex"
      justify="center"
      align="center"
      height="calc(100vh - 83px)"
    >
      <Box w="500px" bgColor="gray.50" p="12" borderRadius="8" m="auto">
        <Heading size="md" textAlign="center">
          Sign In
        </Heading>
        <FormControl id="email" mt="4">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password" mt="4">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="red" mt="8" w="100%">
          Sign In
        </Button>
      </Box>
    </Box>
  );
}
