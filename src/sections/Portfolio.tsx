import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

interface Project {
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Website",
    category: "Web Development",
    image: "https://source.unsplash.com/600x400/?website,tech",
  },
  {
    title: "Branding Project",
    category: "Design",
    image: "https://source.unsplash.com/600x400/?branding,design",
  },
  {
    title: "Mobile App",
    category: "App Development",
    image: "https://source.unsplash.com/600x400/?mobile,app",
  },
  {
    title: "Marketing Campaign",
    category: "Marketing",
    image: "https://source.unsplash.com/600x400/?marketing,digital",
  },
  {
    title: "Portfolio Website",
    category: "UI/UX",
    image: "https://source.unsplash.com/600x400/?portfolio,uiux",
  },
  {
    title: "Restaurant Landing Page",
    category: "Web Design",
    image: "https://source.unsplash.com/600x400/?restaurant,website",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 px-6 lg:px-20">
      <div className="container mx-auto text-center">
        <SectionTitle
          subtitle="Our Work"
          title="Some of Our Recent Projects"
        />

        {/* Portfolio Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.18 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm mt-2">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
