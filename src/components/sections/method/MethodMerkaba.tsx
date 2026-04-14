import { Link } from "react-router-dom";

const expectations = [
  "90 minutes total per session",
  "60 minutes lying down, eyes closed, guided by music",
  "30-minute opening and integration circle",
  "Small, intimate group with space for sharing",
  "No need to speak during the activation itself",
  "Full preparation details shared once booked",
];

const MethodMerkaba = () => {
  return (
    <section className="bg-secondary py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-5">

        {/* What to expect */}
        <div className="bg-card border border-border rounded-xl p-10 sm:p-12">
          <span className="block text-[13px] font-bold uppercase tracking-[0.12em] text-mint mb-6">
            What to expect
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 list-disc pl-5">
            {expectations.map((item) => (
              <li key={item} className="text-[16px] text-body py-2 leading-[1.75]">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Access strip */}
        <div className="bg-accent rounded-xl p-10 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[18px] font-medium text-accent-foreground leading-[1.5] text-center sm:text-left">
            10 Monad Activations every month, online.<br />
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

export default MethodMerkaba;
