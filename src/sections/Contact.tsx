import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// ✅ Hardcoded API Base URL
const API_BASE_URL = "https://hexratech-backend.onrender.com";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData: ContactFormData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/send-message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        form.reset();
        toast.success("Message sent successfully!");
        setShowPopup(true);
      } else {
        toast.error("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      toast.error("Error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <SectionTitle
            subtitle="Get In Touch"
            title="We’d Love to Hear From You"
            align="left"
          />

          <p className="text-gray-700 max-w-md leading-relaxed">
            We respond fast and keep it professional.
            <br />
            <a
              href="mailto:hexratech0@gmail.com"
              className="text-blue-700 hover:underline font-bold"
            >
              Email us directly
            </a>
          </p>

          {/* Contact Info */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
              <Mail className="w-6 h-6 text-blue-600 shrink-0" />
              <span className="break-words">hexratech0@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
              <Phone className="w-6 h-6 text-blue-600 shrink-0" />
              <span>
                +233 55 822 1704 <br />
                +233 53 718 2073
              </span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
              <MapPin className="w-6 h-6 text-blue-600 shrink-0" />
              <span>Accra, Ghana</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <form
            id="contactForm"
            className="bg-white p-10 rounded-3xl shadow-xl space-y-6"
            onSubmit={handleSubmit}
            aria-busy={loading}
          >
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-black"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-black"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="contact-phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                pattern="[\d\s\-\+\(\)]*"
                required
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-black"
                placeholder="Your Phone Number"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none text-black"
                placeholder="Type your message here..."
              />
            </div>

            {/* Submit Button */}
            <div className="w-full sm:w-auto">
              <Button type="submit" loading={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Thank You Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-0 left-0 w-screen h-screen bg-black/25 z-[9999] flex justify-center items-center"
          >
            <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-[90vw]">
              <h3 className="text-blue-600 text-2xl font-semibold mb-3">
                Thank you!
              </h3>
              <p className="text-gray-800 text-lg">
                Your message has been sent.
                <br />
                We’ll get back to you soon.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-5 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-lg shadow hover:opacity-90 transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
