const MethodOrigin = () => {
  return (
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[50px] items-center">
        {/* Left — Photo */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-full max-w-[400px] aspect-[3/4] rounded-lg overflow-hidden">
            <img
              src="https://hciqvcspehfitlgclhud.supabase.co/storage/v1/object/public/sidsel/Headshot%202.jpg"
              alt="Sidsel Løschenkohl"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right — Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground ">
            Working with Sidsel.
          </h2>

          <div className="mt-6 space-y-5 text-[16px] text-body leading-[1.75]">
            <p>
              The Monad Method draws on two decades at the intersection of disciplines rarely found together. Rigorous operational precision from years in product and project management. Deep psychological inquiry through NLP. Formal energetic training under lineaged teachers in India and Bali. A master's in organisational innovation and entrepreneurship.
            </p>
            <p>
              These are not credentials. They are the architecture of what happens in a session.
            </p>
            <p className="font-medium text-foreground">
              Working with Sidsel is precise, direct, and deeply human. Not a formula. A calibrated response to what is actually happening for the founder in front of her.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodOrigin;
