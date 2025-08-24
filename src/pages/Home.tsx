import About from "../sections/About";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import Blog from "../sections/Blog"
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
// If you built a Hero section, import it too
import Hero from "../sections/Hero";

const Home: React.FC = () => {
return (
    <main className="overflow-x-hidden">
      {/* Hero Section (top banner) */}
    <Hero />

      {/* About */}
    <About />

      {/* Services */}
    <Services />

      {/* Portfolio */}
    <Portfolio />

    {/*Blog */}
    <Blog/>

      {/* Testimonials */}
    <Testimonials />

      {/* Contact */}
    <Contact />

      {/* Footer */}
    <Footer />
    </main>
);
};

export default Home;
