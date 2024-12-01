import LogoTicker from "@/components/logo-ticker";
import Navbar from "../components/navbar";
import Hero from "@/components/hero";
import Introduction from "@/components/introduction";
import Features from "@/components/features";
import Integrations from "@/components/integrations";
import Faqs from "@/components/faq";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  );
}
