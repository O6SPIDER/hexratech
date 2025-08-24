import { motion } from "framer-motion";
import type { FC } from "react";

// Since SectionTitle is a missing external component, I've created a simple, self-contained version here.
// In a real project, you would need to ensure this component exists and is correctly imported.
const SectionTitle: FC<{ subtitle: string; title: string }> = ({ subtitle, title }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold uppercase tracking-wide text-blue-600">{subtitle}</h2>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">{title}</h1>
    </div>
  );
};

interface BlogPost {
  title: string;
  date: string;
  link: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    title: "5 Tips for Building Responsive Websites",
    date: "May 2025",
    link: "/blog#responsive-websites",
    image: "https://source.unsplash.com/400x250/?responsive,website",
  },
  {
    title: "Top 10 Web Design Trends in 2025",
    date: "May 2025",
    link: "/blog#web-design-trends",
    image: "https://source.unsplash.com/400x250/?web,design",
  },
  {
    title: "SEO Best Practices for Modern Websites",
    date: "May 2025",
    link: "/blog#seo-best-practices",
    image: "https://source.unsplash.com/400x250/?seo,search",
  },
  {
    title: "How to Optimize Website Performance",
    date: "May 2025",
    link: "/blog#performance-optimization",
    image: "https://source.unsplash.com/400x250/?performance,speed",
  },
  {
    title: "Creating Engaging User Experiences",
    date: "May 2025",
    link: "/blog#engaging-ux",
    image: "https://source.unsplash.com/400x250/?ux,design",
  },
];

const Blog: FC = () => (
  <section id="blog" className="py-20 bg-white px-6 lg:px-20">
    <div className="container mx-auto text-center">
      <SectionTitle subtitle="Insights & Updates" title="Latest from Our Blog" />

      {/* The core of the horizontal scroll/carousel functionality */}
      <div className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
        {posts.map((post, i) => (
          <motion.a
            key={i}
            href={post.link}
            className="min-w-[320px] max-w-[320px] bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group snap-center flex-shrink-0 block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4 text-left">
              <p className="text-sm text-gray-500">{post.date}</p>
              <h3 className="text-lg font-semibold mt-1 text-gray-900 group-hover:text-indigo-600 transition">
                {post.title}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
