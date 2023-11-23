import CTA from "components/ui/CTA";
import Features from "components/ui/Features/Features";
import Hero from "components/ui/Hero";
import SupportedFrameworks from "components/ui/SupportedFrameworks";
import TemplateCTA from "components/ui/TemplateCTA";
import metatag from "metatag";

const { title, desc, ogImage } = metatag;

export const metadata = {
  metadataBase: new URL("https://floatui.com"),
  title,
  description: desc,
  openGraph: {
    title,
    description: desc,
    images: ogImage,
    url: "https://floatui.com",
  },
  twitter: {
    title,
    description: desc,
    images: [ogImage],
  },
};

export default () => {
  return (
    <>
      <Hero />
      <Features />
      <SupportedFrameworks />
      <TemplateCTA />
      <CTA />
    </>
  );
};
