const MethodName = () => {
  return (
    <div className="max-w-[1100px] mx-auto mb-16">
      <div className="bg-accent rounded-xl px-10 py-6 sm:px-12 sm:py-8 flex flex-col md:flex-row items-center gap-8">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-accent-foreground">
            The Monad.
          </h3>
          <p className="mt-3 text-[16px] text-accent-foreground/85 leading-[1.75]">
            A symbol of oneness. The unified self at the centre of every person. Not something to reach. Something to return to.
          </p>
          <p className="mt-4 font-editorial italic text-[18px] text-accent-foreground/90 leading-[1.4]">
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
  );
};

export default MethodName;
