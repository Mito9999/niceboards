import { Button, Flex, Heading, Grid, Text, Box } from "@chakra-ui/react";
import { useAuth } from "../utils/auth";

export default function SignIn() {
  const auth = useAuth();
  console.log(auth);

  return <Box>Sign In</Box>;
}
