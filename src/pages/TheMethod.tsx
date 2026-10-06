import Navigation from "@/components/Navigation";
import MethodHero from "@/components/sections/method/MethodHero";
import MethodProblem from "@/components/sections/method/MethodProblem";
import MethodPushPull from "@/components/sections/method/MethodPushPull";
import MethodModalities from "@/components/sections/method/MethodModalities";
import MethodTheState from "@/components/sections/method/MethodTheState";
import MethodActivationStrip from "@/components/sections/method/MethodActivationStrip";
import MethodAI from "@/components/sections/method/MethodAI";
import MethodActivations from "@/components/sections/method/MethodActivations";
import MethodOrigin from "@/components/sections/method/MethodOrigin";
import MethodMerkaba from "@/components/sections/method/MethodMerkaba";
import MethodTestimonials from "@/components/sections/method/MethodTestimonials";
import MethodOfferings from "@/components/sections/method/MethodOfferings";
import MethodClosingCTA from "@/components/sections/method/MethodClosingCTA";
import Footer from "@/components/sections/Footer";
import usePageMeta from "@/hooks/usePageMeta";

const TheMethod = () => {
  usePageMeta(
    "The Monad Method | Sidsel Løschenkohl",
    "Monad OS: thirty days to clear the pattern underneath and build from who you are becoming.",
    { canonical: "https://www.monadmethod.com/the-method", ogType: "website" }
  );
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="h-16" />
      <MethodHero />
      <MethodProblem />
      <MethodPushPull />
      <MethodModalities />
      <MethodAI />
      <MethodActivations />
      <MethodTheState />
      <MethodActivationStrip />
      <MethodMerkaba />
      <MethodOfferings />
      <MethodTestimonials />
      <MethodClosingCTA />
      <Footer />
    </div>
  );
};

export default TheMethod;
