import SectionTitle from "../components/SectionTitle";
import { motion} from "framer-motion";
import type { Variants } from "framer-motion";
interface Testimonial {
  name: string;
  role: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Kampo",
    role: "CEO, BrightTech",
    feedback:
      "Working with this agency was a game-changer. They understood our vision and delivered a product that exceeded expectations.",
  
  },
  {
    name: "Eben Ampoma",
    role: "Marketing Lead, GlobalReach",
    feedback:
      "Professional, creative, and highly skilled — the team brought our ideas to life with a fresh perspective.",
  },
  {
    name: "Emily Mensah",
    role: "Founder, EcoStyle",
    feedback:
      "Their attention to detail and dedication stood out. We’ve seen a huge boost in engagement since launch!",
  },
];

// Card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 px-6 lg:px-20">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionTitle
            subtitle="Our Clients Say"
            title="Testimonials"
            align="center"
          />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Don’t just take our word for it — here’s what our clients have to
            say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 italic mb-6">
                “{testimonial.feedback}”
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div>
                  <h4 className="text-gray-900 font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
