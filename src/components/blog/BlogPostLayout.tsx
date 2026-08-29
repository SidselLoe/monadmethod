import { Link } from "react-router-dom";
import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

const HEADSHOT =
  "https://hciqvcspehfitlgclhud.supabase.co/storage/v1/object/public/sidsel/Headshot%202.jpg";

interface BlogPostLayoutProps {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  ctaTitle: string;
  ctaBody: string;
  children: ReactNode;
  sourceLine?: ReactNode;
}

const MintDivider = () => (
  <section className="bg-background px-8">
    <div className="max-w-[900px] mx-auto">
      <div className="border-t-2 border-mint" />
    </div>
  </section>
);

const BlogPostLayout = ({
  category,
  title,
  excerpt,
  readTime,
  ctaTitle,
  ctaBody,
  children,
  sourceLine,
}: BlogPostLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="h-16" />

      {/* HERO */}
      <section className="bg-background pt-[140px] pb-[60px] px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <Link
              to="/about"
              className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-mint hover:underline transition-colors"
            >
              ← Back to Blog
            </Link>
            <span className="inline-flex items-center bg-mint text-foreground text-[12px] font-semibold uppercase tracking-[0.14em] px-5 py-2 rounded-full">
              {category}
            </span>
          </div>

          <h1 className="mt-10 text-4xl sm:text-5xl md:text-[68px] font-bold text-foreground leading-[1.1] tracking-[-0.5px]">
            {title}
          </h1>
          <p className="mt-8 font-editorial italic text-[22px] sm:text-[26px] text-foreground/80 leading-[1.5]">
            {excerpt}
          </p>

          <div className="mt-10 flex items-center gap-4">
            <img
              src={HEADSHOT}
              alt="Sidsel Løschenkohl"
              className="w-12 h-12 rounded-full object-cover object-top flex-shrink-0"
            />
            <div className="text-[14px]">
              <p className="font-semibold text-foreground leading-tight">
                Sidsel Løschenkohl
              </p>
              <p className="text-body leading-tight mt-0.5">{readTime}</p>
            </div>
          </div>
        </div>
      </section>

      <MintDivider />

      {/* BODY */}
      <section className="bg-background pt-[60px] pb-[80px] px-8">
        <article className="max-w-[760px] mx-auto">{children}</article>
      </section>

      <MintDivider />

      {/* AUTHOR BIO */}
      <section className="bg-background py-[60px] px-8">
        <div className="max-w-[760px] mx-auto flex flex-col sm:flex-row items-start gap-6">
          <img
            src={HEADSHOT}
            alt="Sidsel Løschenkohl"
            className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0"
          />
          <div>
            <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-mint">
              Written by
            </span>
            <h3 className="mt-1 text-[22px] font-semibold text-foreground leading-tight">
              Sidsel Løschenkohl
            </h3>
            <p className="mt-3 text-[15px] text-body leading-[1.75]">
              Founder of The Monad Method. Strategic partner to founders building
              from alignment, not pressure. Author of <em>The Power of Unwavering Belief</em>.
              Sidsel works at the intersection of identity, strategy, and embodied
              intelligence — helping ambitious founders return to the clearest
              expression of who they are.
            </p>
            <Link
              to="/about"
              className="mt-4 inline-block text-[14px] font-medium text-teal-link hover:underline"
            >
              More about Sidsel →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-[100px] px-8">
        <div className="max-w-[640px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.2]">
            {ctaTitle}
          </h2>
          <p className="mt-5 text-[16px] text-body leading-[1.75]">{ctaBody}</p>
          <a
            href="https://calendly.com/sidselloschenkohl/monad-discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-8 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostLayout;
