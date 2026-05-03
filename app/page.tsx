import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/layout/WhatsAppCTA";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Portfolio />
        <Benefits />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
