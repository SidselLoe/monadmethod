import { Link } from "react-router-dom";
import sidselPhoto from "@/assets/sidsel-photo.jpg";

const HeySidsel = () => {
  return (
    <section className="bg-background py-24 sm:py-28 px-6">
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground">
          Hey, I'm Sidsel.
        </h2>

        {/* Full-width photo */}
        <div className="mt-10 w-full aspect-[16/10] rounded-xl overflow-hidden bg-secondary">
          <img
            src="https://lh3.googleusercontent.com/d/1pxvP4w_wphdEFcmmWN0DJrQKQTtHe9yO"
            alt="Sidsel Løschenkohl"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Mission text */}
        <p className="mt-10 text-lg text-foreground leading-relaxed max-w-[680px] mx-auto">
          I work as a strategic partner to founder-CEOs. My approach is direct and structured: I help you clarify what matters, remove what is creating friction, and make decisions easier to execute.
        </p>

        {/* Personal context */}
        <p className="mt-4 text-base text-foreground leading-relaxed max-w-[680px] mx-auto">
          Monad Method™ is the method I developed after a health collapse in 2023 forced me to rebuild everything. It rests on one belief: your next level requires an identity shift. You are not your business. You are the creator of it.
        </p>

        <Link
          to="/about"
          className="inline-flex mt-8 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-[0.5px] px-10 py-4 rounded hover:bg-accent/90 transition-colors"
        >
          About Me
        </Link>
      </div>
    </section>
  );
};

export default HeySidsel;
