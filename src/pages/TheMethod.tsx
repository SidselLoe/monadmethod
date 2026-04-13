import Navigation from "@/components/Navigation";
import MethodHero from "@/components/sections/method/MethodHero";
import MethodProblem from "@/components/sections/method/MethodProblem";
import MethodPushPull from "@/components/sections/method/MethodPushPull";
import MethodModalities from "@/components/sections/method/MethodModalities";
import MethodSpiral from "@/components/sections/method/MethodSpiral";
import MethodOrigin from "@/components/sections/method/MethodOrigin";
import MethodMerkaba from "@/components/sections/method/MethodMerkaba";
import MethodLTS from "@/components/sections/method/MethodLTS";
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
      <MethodOrigin />
      <MethodMerkaba />
      <MethodLTS />
      <MethodTestimonials />
      <MethodClosingCTA />
      <Footer />
    </div>
  );
};

export default TheMethod;
