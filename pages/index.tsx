import Features from "@/components/ui/Features";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Float UI - Modern UI Components & Templates</title>
        <meta
          name='description'
          content='Beautiful and responsive UI components and templates for React and Vue with Tailwind CSS.'
        />
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
