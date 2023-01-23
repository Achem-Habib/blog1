import "@/styles/prism.css";
import "katex/dist/katex.css";
import "../styles/globals.css";

import "@fontsource/inter/variable-full.css";

import { ThemeProvider } from "next-themes";
import Head from "next/head";
import LayoutWrapper from "../components/layoutWrapper";
import siteMetadata from "../data/siteMetadata";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
