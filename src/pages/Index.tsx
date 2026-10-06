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

const Index = () => {
  usePageMeta(
    "The Monad Method | Sidsel Løschenkohl",
    "Monad OS: thirty days to clear the pattern underneath and build from who you are becoming."
  );
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HeySidsel />
      <MoreFromFounders />
      <ConversionBanner />
      <ProblemProgram />
      <CeoOs />
      <Testimonials />
      <WhyThisWorks />
      <Qualifier />
      <LogoMarquee />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
