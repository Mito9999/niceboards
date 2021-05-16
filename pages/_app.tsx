import {
  ChakraProvider,
  extendTheme,
  Container,
  Box,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Head from "next/head";
import { ProvideAuth } from "../utils/auth";

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Leaderboard</title>
        <meta name="description" content="Real time leaderboards" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ProvideAuth>
        <Container maxW="800px">
          <Flex align="center" justify="space-between" my="20px">
            <Heading>Leaderboard</Heading>
            <Box>
              <Button colorScheme="blue" mr="4">
                Create
              </Button>
              <Button colorScheme="red">Sign In</Button>
            </Box>
          </Flex>
          <Component {...pageProps} />
        </Container>
      </ProvideAuth>
    </ChakraProvider>
  );
}
