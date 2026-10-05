const MethodName = () => {
  return (
    <div className="max-w-[1100px] mx-auto mb-16">
      <div className="bg-mint-light rounded-xl px-10 py-6 sm:px-12 sm:py-8 flex flex-col md:flex-row items-center gap-8">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
            The Monad.
          </h3>
          <p className="mt-3 text-[16px] text-foreground leading-[1.75]">
            A symbol of oneness. The unified self at the centre of every person. Not something to reach. Something to return to.
          </p>
          <p className="mt-4 text-[18px] text-foreground leading-[1.4]">
            You are both the question and the answer.
          </p>
        </div>

        {/* Monad symbol */}
        <div className="flex-shrink-0">
          <svg width="56" height="56" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="46" stroke="currentColor" strokeWidth="13" fill="none" />
            <circle cx="60" cy="60" r="11" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MethodName;
