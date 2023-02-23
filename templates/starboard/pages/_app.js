import Head from "next/head";
import "../styles/globals.css";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Starboard</title>
        <meta
          name='description'
          content='With complete software that enables your teams to interact, plan, evaluate, and manage daily activities, you can break down large projects, quickly, and easily.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <LazyMotion features={domAnimation}>
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
        </LazyMotion>
      </main>
    </>
  );
}
