const CALENDLY_URL = "https://calendly.com/sidselloschenkohl/monad-discovery";

const avatarUrls = [
  "https://lh3.googleusercontent.com/d/1zcYBcz7Jkey1LC-0KMgdCQ8VogZxT3YV",
  "https://lh3.googleusercontent.com/d/1P-h1KerdaH8Ld3FP8lHOXHZouMgy5pz9",
  "https://lh3.googleusercontent.com/d/1fVQAZtaPxIAYYhPCcAaog6qSH1z_mh0G",
  "https://lh3.googleusercontent.com/d/1gCv17YwzgfNHn4BFt_3CwCAa40SV2LNm",
  "https://lh3.googleusercontent.com/d/1Yr_ihfjJ1ERh-Ebi4kKQiTWxq5eRO__9",
];

const Hero = () => {
  return (
    <section className="bg-background pt-[200px] pb-[120px] px-8">
      <div className="max-w-[1100px] mx-auto text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-mint mb-8">
          For founders who are the business.
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-[72px] font-bold text-foreground leading-[1.15] tracking-[-0.5px]">
          You are the business. That's not a compliment.
        </h1>

        <p className="mt-8 text-[20px] text-body font-normal max-w-[700px] mx-auto leading-[1.7]">
          The ceiling is internal. The work is how you move it. Three modalities. Thirty days.
        </p>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mt-12 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
        >
          Book a Call
        </a>

        {/* Avatar stack + social proof */}
        <div className="mt-10 flex flex-col items-center gap-3">
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
          <span className="text-[14px] text-body">150+ founders, leaders, and creators have experienced the work.</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
