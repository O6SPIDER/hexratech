import Layout from "./components/Layout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
//import Team from "./sections/Team";
//import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer/>
    </Layout>
  );
}

export default App;
