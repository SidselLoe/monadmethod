import { Link } from "react-router-dom";

const MethodActivationStrip = () => {
  return (
    <section className="bg-surface py-[60px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-accent rounded-xl p-10 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[18px] font-medium text-accent-foreground leading-[1.5] text-center sm:text-left">
            10 Monad Activations every month, online.
            <br />
            Included in Monad OS and every engagement that follows.
          </p>
          <Link
            to="/apply"
            className="flex-shrink-0 inline-flex bg-background text-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-background/90 transition-colors"
          >
            View Upcoming Sessions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MethodActivationStrip;
