import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import ProblemProgram from "@/components/sections/ProblemProgram";
import HeySidsel from "@/components/sections/HeySidsel";
import Testimonials from "@/components/sections/Testimonials";
import WhyThisWorks from "@/components/sections/WhyThisWorks";
import ConversionBanner from "@/components/sections/ConversionBanner";
import CeoOs from "@/components/sections/CeoOs";
import Qualifier from "@/components/sections/Qualifier";
import MoreFromFounders from "@/components/sections/MoreFromFounders";
import LogoMarquee from "@/components/sections/LogoMarquee";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import usePageMeta from "@/hooks/usePageMeta";
import Reveal from "@/components/Reveal";

const Index = () => {
  usePageMeta(
    "The Monad Method — Strategic Coaching for Founders | Sidsel Løschenkohl",
    "Three modalities. Thirty days. Energy activations, guided inquiry, and strategic sessions for founders who are the business."
  );
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Reveal><ProblemProgram /></Reveal>
      <Reveal><WhyThisWorks /></Reveal>
      <Reveal><HeySidsel /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><Qualifier /></Reveal>
      <Reveal><CeoOs /></Reveal>
      <Reveal><ConversionBanner /></Reveal>
      <Reveal><MoreFromFounders /></Reveal>
      <Reveal><LogoMarquee /></Reveal>
      <Reveal><FinalCTA /></Reveal>
      <Footer />
    </div>
  );
};

export default Index;
