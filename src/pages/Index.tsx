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
import Footer from "@/components/sections/Footer";
import { Link } from "react-router-dom";

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

      {/* Access strip */}
      <section className="bg-accent py-[100px] px-8">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[18px] font-medium text-accent-foreground leading-[1.5] text-center sm:text-left">
            10 Monad Activations every month, online.<br />
            Included in Monad OS and every engagement that follows.
          </p>
          <Link
            to="/apply"
            className="flex-shrink-0 inline-flex bg-background text-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-background/90 transition-colors"
          >
            View Upcoming Sessions
          </Link>
        </div>
      </section>

      <LogoMarquee />
      <Footer />
    </div>
  );
};

export default Index;
