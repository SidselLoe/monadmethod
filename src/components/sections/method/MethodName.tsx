const MethodName = () => {
  return (
    <section className="bg-background py-[60px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-mint rounded-xl p-10 sm:p-14 flex flex-col items-center text-center">
          {/* Monad symbol — white */}
          <svg width="56" height="56" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="3.5" fill="none" />
            <circle cx="60" cy="60" r="8" fill="white" />
          </svg>

          {/* H2 */}
          <h2 className="mt-8 text-3xl sm:text-4xl md:text-[48px] font-bold text-background leading-[1.15]">
            The name.
          </h2>

          {/* Paragraph */}
          <p className="mt-5 text-[16px] text-background/85 leading-[1.75] max-w-[600px]">
            Monad is a Pythagorean symbol for unity. The indivisible point from which everything unfolds. The essential self when the noise is removed.
          </p>

          {/* Playfair italic line */}
          <p className="mt-8 font-editorial italic text-[22px] text-background leading-[1.4]">
            You are both the question and the answer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MethodName;
