import Navigation from "@/components/Navigation";
import MethodHero from "@/components/sections/method/MethodHero";
import MethodProblem from "@/components/sections/method/MethodProblem";
import MethodPushPull from "@/components/sections/method/MethodPushPull";
import MethodModalities from "@/components/sections/method/MethodModalities";
import MethodTheState from "@/components/sections/method/MethodTheState";
import MethodAI from "@/components/sections/method/MethodAI";
import MethodActivations from "@/components/sections/method/MethodActivations";
import MethodOrigin from "@/components/sections/method/MethodOrigin";
import MethodMerkaba from "@/components/sections/method/MethodMerkaba";
import MethodOfferings from "@/components/sections/method/MethodOfferings";
import MethodTestimonials from "@/components/sections/method/MethodTestimonials";
import MethodClosingCTA from "@/components/sections/method/MethodClosingCTA";
import Footer from "@/components/sections/Footer";

const TheMethod = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="h-16" />
      <MethodHero />
      <MethodProblem />
      <MethodPushPull />
      <MethodModalities />
      <MethodTheState />
      <MethodAI />
      <MethodActivations />
      <MethodMerkaba />
      <MethodOfferings />
      <MethodTestimonials />
      <MethodClosingCTA />
      <Footer />
    </div>
  );
};

export default TheMethod;
