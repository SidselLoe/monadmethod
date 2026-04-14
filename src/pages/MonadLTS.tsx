import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

const MonadLTS = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="h-16" />
      <section className="bg-background py-[100px] px-8">
        <div className="max-w-[1100px] mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
            Monad LTS
          </h1>
          <p className="mt-4 text-[18px] text-body leading-[1.7]">
            Coming soon.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MonadLTS;
