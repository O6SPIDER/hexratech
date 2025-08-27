import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down → hide header
        setShowHeader(false);
      } else {
        // scrolling up → show header
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu after clicking a link
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-blue-600">
          HexraTech
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="#home" className="text-grey-600 hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="text-white hover:text-blue-600">
            About
          </a>
          <a href="#services" className="text-white hover:text-blue-600">
            Services
          </a>
          {/* <a href="#portfolio" className="text-white hover:text-blue-600">
            Portfolio
          </a> */}
          <a href="#contact" className="text-white hover:text-blue-600">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg">
          <nav className="flex flex-col space-y-4 p-6 font-medium">
            <a
              href="#home"
              onClick={handleNavClick}
              className="text-white hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={handleNavClick}
              className="text-white hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#services"
              onClick={handleNavClick}
              className="text-white hover:text-blue-600"
            >
              Services
            </a>
            {/* <a
              href="#portfolio"
              onClick={handleNavClick}
              className="text-white hover:text-blue-600"
            >
              Portfolio
            </a> */}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="text-white hover:text-blue-600"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
