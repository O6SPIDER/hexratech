import { motion } from "framer-motion";
import type { FC } from "react";


const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    id: "responsive-websites",
    title: "5 Tips for Building Responsive Websites",
    content: `Responsive web design is no longer a luxury; it's a necessity. With users browsing on everything from smartphones to giant desktop monitors, your site needs to adapt seamlessly. By focusing on flexible layouts with CSS Grid or Flexbox, and using media queries to apply specific styles at different breakpoints, you can create a consistent experience. It's also vital to optimize images for web to ensure fast load times, especially on mobile devices. Remember, a mobile-first approach—designing for the smallest screen first and then scaling up—often leads to a cleaner, more efficient final product.`,
    date: "May 2025",
    image: "https://source.unsplash.com/800x400/?responsive,website",
  },
  {
    id: "web-design-trends",
    title: "Top 10 Web Design Trends in 2025",
    content: `The world of web design is constantly evolving, and 2025 is no exception. We're seeing a rise in bold, expressive typography that acts as a primary design element, replacing traditional imagery. Glassmorphism, with its frosted-glass effect, continues to be a popular choice for adding depth and modernity. Artificial intelligence is also playing a bigger role, from generating personalized content to creating dynamic user interfaces. Immersive scrolling experiences are becoming more common, and for good reason: they make websites feel like an interactive story, pulling users in and keeping them engaged longer.`,
    date: "May 2025",
    image: "https://source.unsplash.com/800x400/?web,design",
  },
  {
    id: "seo-best-practices",
    title: "SEO Best Practices for Modern Websites",
    content: `Search Engine Optimization (SEO) is the art and science of getting your website to rank higher in search results. The foundation of modern SEO lies in creating high-quality, valuable content that answers user questions. Beyond content, technical SEO is crucial. This includes using semantic HTML to help search engines understand your page's structure, ensuring your site is mobile-friendly, and optimizing page speed. Building quality backlinks from reputable sources remains a powerful signal of authority, and keeping your content fresh and up-to-date tells search engines that your site is a reliable resource.`,
    date: "May 2025",
    image: "https://source.unsplash.com/800x400/?seo,search",
  },
  {
    id: "performance-optimization",
    title: "How to Optimize Website Performance",
    content: `In an age where every second counts, website performance is paramount. A slow-loading site can cause users to bounce before they even see your content. To speed things up, start by compressing all your images to reduce file size without losing quality. Minifying your HTML, CSS, and JavaScript files removes unnecessary characters, making them load faster. Caching static resources on the user's browser and leveraging a Content Delivery Network (CDN) can dramatically reduce server response times. Finally, implementing lazy loading for images and videos ensures that content only loads when it's needed, improving initial page load times.`,
    date: "May 2025",
    image: "https://source.unsplash.com/800x400/?performance,speed",
  },
  {
    id: "engaging-ux",
    title: "Creating Engaging User Experiences",
    content: `User Experience (UX) design is about crafting an interface that is not just functional but also delightful to use. It starts with intuitive navigation—making it easy for users to find what they're looking for. Clear and prominent calls-to-action (CTAs) guide users to take the next step, whether that's signing up for a newsletter or making a purchase. Incorporating interactive elements and animations can make the experience more dynamic and fun. Most importantly, consistent branding and accessible design principles ensure that your site is usable and enjoyable for everyone, building trust and turning visitors into loyal customers.`,
    date: "May 2025",
    image: "https://source.unsplash.com/800x400/?ux,design",
  },
];

const BlogCard: FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
  return (
    <motion.div
      key={post.id}
      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer overflow-hidden flex flex-col md:flex-row gap-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      {/* Image Container with Subtle Zoom */}
      <div className="relative overflow-hidden w-full md:w-1/2 lg:w-1/3">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        {/* Date and Reading Time Overlay */}
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-2">
          <CalendarIcon />
          <span>{post.date}</span>
          <ClockIcon />
          <span>3 min read</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex-1">
        <h3 className="text-2xl font-bold mt-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-gray-600 mt-4 leading-relaxed whitespace-pre-line">
          {post.content}
        </p>
      </div>
    </motion.div>
  );
};

const SectionTitle: FC<{ subtitle: string; title: string }> = ({ subtitle, title }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold uppercase tracking-wide text-blue-600">{subtitle}</h2>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">{title}</h1>
    </div>
  );
};

const BlogPage: FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SectionTitle subtitle="Insights & Updates" title="Our Blog" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our articles for web design, development tips, SEO strategies, and more insights from our team.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {posts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
    
  );
};


export default BlogPage;
