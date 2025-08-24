import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import {  Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    icon: ReactNode;
    link: string;
  }[];
}

const team: TeamMember[] = [
  {
    name: "Agyemang Arnold",
    role: "******",
    image: "/assets/team1.jpg",
    socials: [
      //{ icon: <Facebook className="w-5 h-5" />, link: "#" },
      //{ icon: <Twitter className="w-5 h-5" />, link: "#" },
      { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/arnold-agyemang-718067205/" },
    ],
  },
  {
    name: "Siaw Albert",
    role: "******",
    image: "/assets/team2.jpg",
    socials: [
      //{ icon: <Facebook className="w-5 h-5" />, link: "#" },
      //{ icon: <Twitter className="w-5 h-5" />, link: "#" },
      { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/albert-siaw-55451733a/" },
    ],
  },
];

// Card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white px-6 lg:px-20">
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
            subtitle="Meet Our Team"
            title="The People Behind the Magic"
            align="center"
          />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our passionate and skilled team members are dedicated to bringing
            your ideas to life with creativity, innovation, and excellence.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Image */}
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-indigo-600 text-sm font-medium">
                  {member.role}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-4">
                  {member.socials.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-indigo-600"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
