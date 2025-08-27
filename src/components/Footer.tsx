import { Instagram, Linkedin } from "lucide-react";
import trans from "../assets/trans.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo + About */}
        <div>
          <img
            src={trans}
            alt="Hexratech Logo"
            className="w-32 mb-4"
          />
          <p className="text-gray-400 leading-relaxed">
            Hexratech is dedicated to crafting exceptional digital experiences
            that empower businesses to thrive online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">Email: <br /> hexratech0@gmail.com</p>
          <p className="text-gray-400 mt-2">
            Phone:<br /> +233 55 822 1704<br /> +233 53 718 2073
          </p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hexratech. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
