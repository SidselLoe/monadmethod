export interface BlogPostSummary {
  title: string;
  excerpt: string;
  href: string;
  label?: string;
}

/** Newest first. */
export const blogPosts: BlogPostSummary[] = [
  {
    title: "Follow the moment that has a charge",
    excerpt:
      "The beliefs you most need to see feel like facts from the inside. So do not start with the blank page. Start with what still has a charge.",
    href: "/blog/how-to-start-shadow-work",
    label: "Featured on Rosebud",
  },
  {
    title: "What are you getting from staying this way?",
    excerpt:
      "The deeper question is: what are you still getting from staying this way?",
    href: "/blog/what-are-you-getting-from-staying-this-way",
  },
  {
    title: "Letting go of the version that got you here",
    excerpt:
      "There is a point in growth where adding more stops working. The real question is what can no longer come with you.",
    href: "/blog/letting-go",
  },
  {
    title: "The meaning ceiling",
    excerpt:
      "You hit every target you set. So why does it feel like something is still missing?",
    href: "/blog/the-meaning-ceiling",
  },
  {
    title: "Push vs. pull: why your drive is the problem",
    excerpt:
      "The same force that built everything is the force that is now in the way.",
    href: "/blog/push-vs-pull",
  },
  {
    title: "What I mean when I say internal operating system",
    excerpt: "It is not strategy. It is not mindset. It is the layer underneath both.",
    href: "/blog/internal-operating-system",
  },
];
