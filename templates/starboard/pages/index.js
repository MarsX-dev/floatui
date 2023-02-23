import Hero from "../components/ui/Hero";
import Navbar from "../components/ui/Navbar";
import GradientWrapper from "../components/GradientWrapper";
import CenteredCTA from "../components/ui/CenteredCTA";
import Stats from "../components/ui/Stats";
import Features from "../components/ui/Features";
import CTA from "../components/ui/CTA";
import Pricing from "../components/ui/Pricing";
import Testimonial from "../components/ui/Testimonial";
import Footer from "../components/ui/Footer";
import FooterCTA from "../components/ui/FooterCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <GradientWrapper className='pb-0 sm:my-16'>
        <CenteredCTA />
        <Stats />
      </GradientWrapper>
      <Features />
      <CTA />
      <Pricing />
      <Testimonial />
      <FooterCTA />
      <Footer />
    </>
  );
}
