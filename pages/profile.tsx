import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../utils/auth";

export default function Home() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => setIsMounted(true), []);

  const router = useRouter();
  const auth = useAuth();
  console.log(auth.user);

  const [newNameValue, setNewNameValue] = useState<string>("");
  const [isNameEditable, setIsNameEditable] = useState<boolean>(false);

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
                    <Text>
                      {isNameEditable ? (
                        <Input
                          placeholder={auth.user.displayName}
                          value={newNameValue}
                          onChange={(e) => setNewNameValue(e.target.value)}
                        />
                      ) : (
                        <Text>{auth.user.displayName || "Guest"}</Text>
                      )}
                    </Text>
                    <Flex align="center">
                      {isNameEditable && (
                        <Button
                          mx="8"
                          colorScheme="red"
                          variant="link"
                          onClick={async () => {
                            if (newNameValue.length > 0) {
                              await auth.user.updateProfile({
                                displayName: newNameValue,
                              });
                            }
                            setIsNameEditable((prev) => !prev);
                          }}
                        >
                          Done
                        </Button>
                      )}
                      <Button
                        colorScheme="red"
                        variant="link"
                        onClick={() => {
                          setIsNameEditable((prev) => !prev);
                        }}
                      >
                        {isNameEditable ? "Cancel" : "Edit"}
                      </Button>
                    </Flex>
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
