import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import ProblemProgram from "@/components/sections/ProblemProgram";
import HeySidsel from "@/components/sections/HeySidsel";
import Testimonials from "@/components/sections/Testimonials";
import WhyThisWorks from "@/components/sections/WhyThisWorks";
import ConversionBanner from "@/components/sections/ConversionBanner";
import CeoOs from "@/components/sections/CeoOs";
import DeltaSection from "@/components/sections/DeltaSection";
import MoreFromFounders from "@/components/sections/MoreFromFounders";
import LogoMarquee from "@/components/sections/LogoMarquee";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemProgram />
      <WhyThisWorks />
      <HeySidsel />
      <Testimonials />
      <ConversionBanner />
      <CeoOs />
      <DeltaSection />
      <MoreFromFounders />
      <LogoMarquee />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
