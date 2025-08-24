import type React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { Code, Palette, Search, Sparkles } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Web Design",
    description:
      "Modern, user-friendly designs crafted to engage your audience and elevate your brand.",
    icon: <Palette className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Front-End Development",
    description:
      "Responsive, performant websites built with the latest technologies and frameworks.",
    icon: <Code className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "SEO Services",
    description:
      "Improve your search engine rankings and drive more organic traffic to your website.",
    icon: <Search className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Branding",
    description:
      "Build a strong and memorable brand identity that resonates with your target audience.",
    icon: <Sparkles className="w-10 h-10 text-blue-600" />,
  },
];

// ✅ Variants for cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 px-6 lg:px-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionTitle
            subtitle="What We Do"
            title="Our Services"
            align="center"
          />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From design to development, SEO to branding — we provide
            end-to-end digital solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
