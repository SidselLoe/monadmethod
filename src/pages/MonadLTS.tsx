import Navigation from "@/components/Navigation";
import MethodTestimonials from "@/components/sections/method/MethodTestimonials";
import Footer from "@/components/sections/Footer";

const MonadLTS = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="h-16" />
      <section className="bg-background pt-[200px] pb-[120px] px-8">
        <div className="max-w-[1100px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-[72px] font-bold text-foreground leading-[1.15] tracking-[-0.5px]">
            Monad LTS
          </h1>
          <p className="mt-8 text-[20px] text-body leading-[1.7]">
            Coming soon.
          </p>
        </div>
      </section>
      <MethodTestimonials />
      <Footer />
    </div>
  );
};

export default MonadLTS;
