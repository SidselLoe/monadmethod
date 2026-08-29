import { Link } from "react-router-dom";
import type { BlogPostSummary } from "@/data/blogPosts";

const BlogCard = ({ post }: { post: BlogPostSummary }) => (
  <Link
    to={post.href}
    className="group flex flex-col h-full bg-white border border-border rounded-xl p-8 transition-all duration-300 hover:border-mint hover:shadow-[0_8px_30px_rgba(126,200,200,0.15)]"
  >
    {post.label && (
      <span className="mb-3 text-[12px] font-bold tracking-[0.14em] uppercase text-mint">
        {post.label}
      </span>
    )}
    <h3 className="text-[22px] font-semibold text-foreground leading-[1.3]">
      {post.title}
    </h3>
    <p className="mt-3 text-[15px] text-body leading-[1.7] flex-1">
      {post.excerpt}
    </p>
    <span className="mt-6 inline-block text-[14px] font-medium text-teal-link group-hover:underline">
      Read more →
    </span>
  </Link>
);

export default BlogCard;
