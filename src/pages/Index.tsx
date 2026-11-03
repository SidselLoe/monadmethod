import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import MoreFromFounders from "@/components/sections/MoreFromFounders";
import ProblemProgram from "@/components/sections/ProblemProgram";
import WholeLife from "@/components/sections/WholeLife";
import SameYou from "@/components/sections/SameYou";
import HeySidsel from "@/components/sections/HeySidsel";
import Offer from "@/components/sections/Offer";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyThisWorks from "@/components/sections/WhyThisWorks";
import Qualifier from "@/components/sections/Qualifier";
import Faq from "@/components/sections/Faq";
import LogoMarquee from "@/components/sections/LogoMarquee";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import usePageMeta from "@/hooks/usePageMeta";

const Index = () => {
  usePageMeta(
    "Monad OS | Sidsel Løschenkohl",
    "You know how to do it, so why isn't it moving? Monad OS clears the pattern running underneath in 30 days, one to one, with energy activations, workbooks made for you and four private sessions."
  );
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MoreFromFounders />
      <ProblemProgram />
      <WholeLife />
      <SameYou />
      <HeySidsel />
      <Offer />
      <HowItWorks />
      <WhyThisWorks />
      <Qualifier />
      <Faq />
      <LogoMarquee />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
