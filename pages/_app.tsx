import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import { ProvideAuth } from "../utils/auth";
import Navbar from "../components/Navbar";

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  styles: {
    global: {
      html: {
        overflowY: "scroll",
      },
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Niceboards</title>
        <meta name="description" content="Real time leaderboards" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-status-bar" content="#1a202c" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo_96x96.png" />
      </Head>
      <ProvideAuth>
        <Container maxW="800px">
          <Navbar />
          <Component {...pageProps} />
        </Container>
      </ProvideAuth>
    </ChakraProvider>
  );
}
