import {
  Heading,
  Table,
  Tbody,
  Tr,
  Td,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useAuth } from "../utils/auth";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => setIsMounted(true), []);

  const router = useRouter();
  const auth = useAuth();
  console.log(auth.user);

  return (
    <>
      {isMounted && auth.user && (
        <>
          <Flex justify="space-between" mb="8">
            <Heading size="lg">Profile</Heading>
            <Button
              variant="link"
              colorScheme="blue"
              onClick={() => {
                auth.signout();
                router.push("/");
              }}
            >
              Sign Out
            </Button>
          </Flex>

          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td>Name</Td>
                <Td>
                  <Flex justify="space-between">
                    <Text>{auth.user.displayName || "Guest"}</Text>
                    <Button colorScheme="red" variant="link">
                      Edit
                    </Button>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>Email</Td>
                <Td>{auth.user.email}</Td>
              </Tr>
              <Tr>
                <Td>Joined On</Td>
                <Td>
                  {new Date(
                    auth.user.metadata.creationTime
                  ).toLocaleDateString()}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </>
      )}
    </>
  );
}
