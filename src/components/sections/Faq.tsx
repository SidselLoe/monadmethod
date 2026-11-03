import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/monadOs";

const Faq = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[760px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground text-center tracking-[-0.025em]">
          <span className="font-extrabold">Questions</span> people ask
        </h2>
        <Accordion type="single" collapsible className="mt-10 border-t border-border">
          {faqs().map(([question, answer], index) => (
            <AccordionItem key={question} value={`faq-${index}`} className="border-b border-border">
              <AccordionTrigger className="group py-6 text-left text-[18px] sm:text-[20px] font-semibold leading-[1.35] text-foreground hover:no-underline [&>svg]:hidden">
                {question}
                <span aria-hidden="true" className="ml-4 shrink-0 text-[28px] font-normal leading-none text-mint group-data-[state=open]:hidden">+</span>
                <span aria-hidden="true" className="ml-4 hidden shrink-0 text-[28px] font-normal leading-none text-mint group-data-[state=open]:block">−</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[16px] text-body leading-[1.75]">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
