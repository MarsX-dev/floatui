import Layout from "../components/layout";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import React from "react";

export default function App({ Component, pageProps, ...appProps }) {
  // use a LayoutComponent variable
  // that switches to actual Layout or React.Fragment (no layout)
  // accordingly to pathname
  // array of all the paths that doesn't need layout
  const isLayoutNeeded = !["/login"].includes(appProps.router.pathname);

  const LayoutComponent = isLayoutNeeded ? Layout : React.Fragment;

  return (
    <ThemeProvider defaultTheme='light' attribute='class'>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </ThemeProvider>
  );
}
