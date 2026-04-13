const MethodName = () => {
  return (
    <section className="bg-background py-[60px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-mint rounded-xl p-10 sm:p-12 flex flex-col md:flex-row items-center gap-8">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-background">
              The name.
            </h3>
            <p className="mt-3 text-[16px] text-background/85 leading-[1.75]">
              Monad is a Pythagorean symbol for unity. The indivisible point from which everything unfolds. The essential self when the noise is removed.
            </p>
            <p className="mt-4 font-editorial italic text-[18px] text-background/90 leading-[1.4]">
              You are both the question and the answer.
            </p>
          </div>

          {/* Monad symbol */}
          <div className="flex-shrink-0">
            <svg width="56" height="56" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="3.5" fill="none" />
              <circle cx="60" cy="60" r="8" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodName;
