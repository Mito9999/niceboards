import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../utils/auth";

export default function Navbar() {
  const auth = useAuth();

  return (
    <Flex
      align="center"
      direction={["column", "row"]}
      justify="space-between"
      my="20px"
    >
      <Link href="/">
        <Heading cursor="pointer" mb={["4", "0"]}>
          <Image src="/logo.svg" width={583 / 8} height={364 / 8} />
        </Heading>
      </Link>
      <Box>
        <Button colorScheme="blue" mr="4">
          Create
        </Button>
        <Link href={auth.user ? "/profile" : "/signin"}>
          <Button colorScheme="red">{auth.user ? "Profile" : "Sign In"}</Button>
        </Link>
      </Box>
    </Flex>
  );
}
