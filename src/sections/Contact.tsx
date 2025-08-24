import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true); // start loader

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setShowPopup(true);
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      alert("Error submitting the form.");
    } finally {
      setLoading(false); // stop loader
    }
  };

  return (
    <section id="contact" className="py-20 bg-white px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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

          <p className="text-gray-600 max-w-md leading-relaxed">
            We respond fast and keep it professional.
            <br />
            <a
              href="mailto:spiderwebsonline25@gmail.com"
              className="text-blue-600 hover:underline"
            >
              Email us directly
            </a>
          </p>

          {/* Contact Info */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="w-6 h-6 text-blue-600 shrink-0" />
              <span className="break-words">spiderwebsonline25@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="w-6 h-6 text-blue-600 shrink-0" />
              <span>+233 55 123 4567</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
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
            className="bg-gray-50 p-8 rounded-2xl shadow-lg space-y-6"
            action="https://formsubmit.co/spiderwebsonline25@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            {/* Honeypot + Hidden Inputs */}
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for contacting HexraTech! We have received your message and will get back to you soon."
            />
            <input type="hidden" name="_template" value="table" />

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
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-black"
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
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-black"
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
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-black"
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
                rows={4}
                required
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none text-black"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            {/* Button with Loader */}
            <div className="w-full sm:w-auto  disabled={loading}">
              <Button>
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Thank You Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-blue-500/25 z-[9999] flex justify-center items-center">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-[90vw]">
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
        </div>
      )}
    </section>
  );
};

export default Contact;
