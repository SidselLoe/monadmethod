import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import usePageMeta from "@/hooks/usePageMeta";

const Blog = () => {
  usePageMeta(
    "Blog — Sidsel Løschenkohl | The Monad Method",
    "Writing on founders, identity, state, and what it actually takes to build from alignment.",
    { canonical: "https://www.monadmethod.com/blog", ogType: "website" }
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="h-16" />

      <section className="bg-background pt-[140px] pb-[60px] px-8">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-[13px] font-bold tracking-[0.12em] uppercase text-mint">
            Blog
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-[68px] font-bold text-foreground leading-[1.1] tracking-[-0.5px]">
            Writing on founders, identity, and state
          </h1>
          <p className="mt-8 font-editorial italic text-[22px] sm:text-[26px] text-foreground/80 leading-[1.5] max-w-[760px]">
            What it actually takes to build from alignment instead of pressure.
          </p>
        </div>
      </section>

      <section className="bg-background px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="border-t-2 border-mint" />
        </div>
      </section>

      <section className="bg-surface py-[80px] px-8">
        <div className="max-w-[1100px] mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.href} post={post} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
