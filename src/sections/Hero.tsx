import { motion } from "framer-motion";
import Button from "../components/Button";
import hero from "../assets/hero.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center text-white px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }} // <-- update with your saved file path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          We Design & Build Exceptional Websites
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Crafts digital experiences that inspire, engage,
          and grow your business.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <a href="#contact">
            <Button variant="primary" size="lg">
              Get Started
          </Button>
          </a>
          {/* <a href="#portfolio">
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </a> */}
        </motion.div>
      </motion.div>

      {/* Decorative wave */}
      <motion.div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <svg
          className="relative block w-full h-16 md:h-24 lg:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,186.7C672,192,768,128,864,101.3C960,75,1056,85,1152,112C1248,139,1344,181,1392,202.7L1440,224L1440,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
