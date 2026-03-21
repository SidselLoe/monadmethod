import { Link } from "react-router-dom";

const avatarUrls = [
  "https://lh3.googleusercontent.com/d/1zcYBcz7Jkey1LC-0KMgdCQ8VogZxT3YV",
  "https://lh3.googleusercontent.com/d/1P-h1KerdaH8Ld3FP8lHOXHZouMgy5pz9",
  "https://lh3.googleusercontent.com/d/1fVQAZtaPxIAYYhPCcAaog6qSH1z_mh0G",
  "https://lh3.googleusercontent.com/d/1gCv17YwzgfNHn4BFt_3CwCAa40SV2LNm",
  "https://lh3.googleusercontent.com/d/1Yr_ihfjJ1ERh-Ebi4kKQiTWxq5eRO__9",
];

const Hero = () => {
  return (
    <section className="bg-background py-28 sm:py-36 md:py-44 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-[60px] font-medium text-foreground leading-[1.1] tracking-[-0.3px]">
          Lead the company you are building.
          <br />
          <span className="text-muted-foreground">Without it costing you everything.</span>
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-[640px] mx-auto leading-relaxed">
          Partner-level coaching for founder-CEOs who need more capacity, stronger leadership, and a way of operating that can match the scale of their ambition.
        </p>

        <Link
          to="/apply"
          className="inline-flex mt-10 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-[0.5px] px-10 py-4 rounded hover:bg-accent/90 transition-colors"
        >
          Apply Now
        </Link>

        {/* Avatar stack + social proof */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex">
            {avatarUrls.map((url, i) => (
              <img
                key={i}
                src={url}
                alt="Founder"
                className="w-8 h-8 rounded-full object-cover border-2 border-background shadow-sm"
                style={{ marginLeft: i > 0 ? "-10px" : "0" }}
                loading="lazy"
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">Trusted by 50+ founders.</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
