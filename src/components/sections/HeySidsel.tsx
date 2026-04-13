import { Link } from "react-router-dom";
const sidselPhoto = "https://hciqvcspehfitlgclhud.supabase.co/storage/v1/object/public/sidsel/Headshot%201.jpg";

const HeySidsel = () => {
  return (
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[50px] items-center">
        {/* Photo */}
        <div className="aspect-[4/3] rounded-lg overflow-hidden">
          <img
            src={sidselPhoto}
            alt="Sidsel Løschenkohl"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
            Hey, I'm Sidsel.
          </h2>

          <p className="mt-6 text-[18px] text-body leading-[1.7] max-w-[700px]">
            I work as a strategic partner to founders who are the business and who know there is more but cannot get to it without something changing in them first.
          </p>

          <p className="mt-4 text-[16px] text-body leading-[1.75] max-w-[700px]">
            My approach is direct and structured. The Monad Method is the methodology I developed after a health collapse in 2023 forced me to rebuild everything. It rests on one belief: your next level requires an identity shift. You are not your business. You are the creator of it.
          </p>

          <Link
            to="/about"
            className="inline-flex mt-8 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
          >
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeySidsel;
