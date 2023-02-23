import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className='scroll-smooth' lang='en'>
      <Head />
      <body className='md:overflow-visible'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
