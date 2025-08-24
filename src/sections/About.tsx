import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import aboutImg from "../assets/about.jpg"; // replace with your own image in assets folder

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-white text-gray-800 px-6 lg:px-20"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImg}
            alt="About HexraTech"
            className="rounded-2xl shadow-lg w-full max-w-lg max-h-[450px] object-cover"
          />
        </motion.div>

        {/* Right Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SectionTitle subtitle="Who We Are" title="About HexraTech Agency" />

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            At{" "}
            <span className="font-semibold text-blue-600">HexraTech</span>,
            we are a passionate team of developers and designers dedicated to
            crafting exceptional digital experiences. From stunning websites to
            strategic branding, we blend creativity and technology to help your
            business thrive in the digital era.
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Based in Accra, Ghana, we proudly serve clients worldwide,
            delivering solutions that are not only visually appealing but also
            built with performance and growth in mind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
