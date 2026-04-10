import { Link } from "react-router-dom";
const sidselPhoto = "https://hciqvcspehfitlgclhud.supabase.co/storage/v1/object/public/sidsel/Headshot%201.jpg";

const HeySidsel = () => {
  return (
    <section className="bg-background py-24 sm:py-28 px-6">
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          Hey, I'm Sidsel.
        </h2>

        {/* Full-width photo */}
        <div className="mt-10 w-full aspect-[16/10] rounded-xl overflow-hidden bg-secondary">
          <img
            src={sidselPhoto}
            alt="Sidsel Løschenkohl"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Mission text */}
        <p className="mt-10 text-lg text-foreground leading-relaxed max-w-[680px] mx-auto">
          I work as a strategic partner to founders who are the business and who know there is more but cannot get to it without something changing in them first.
        </p>

        {/* Personal context */}
        <p className="mt-4 text-base text-foreground leading-relaxed max-w-[680px] mx-auto">
          My approach is direct and structured. The Monad Method is the methodology I developed after a health collapse in 2023 forced me to rebuild everything. It rests on one belief: your next level requires an identity shift. You are not your business. You are the creator of it.
        </p>

        <Link
          to="/about"
          className="inline-flex mt-8 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-[0.5px] px-10 py-4 rounded-full hover:bg-accent/90 transition-colors"
        >
          About Me
        </Link>
      </div>
    </section>
  );
};

export default HeySidsel;
