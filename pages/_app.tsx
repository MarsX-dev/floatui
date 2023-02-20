import { AppProvider } from "@/context/contextApp";
import "@/styles/globals.css";
import "@/styles/prismjs-theme.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
