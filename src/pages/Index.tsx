import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import ProblemProgram from "@/components/sections/ProblemProgram";
import HeySidsel from "@/components/sections/HeySidsel";
import Testimonials from "@/components/sections/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Spacer for fixed nav */}
      <div className="h-16" />
      <Hero />
      <ProblemProgram />
      <HeySidsel />
      <Testimonials />
    </div>
  );
};

export default Index;
