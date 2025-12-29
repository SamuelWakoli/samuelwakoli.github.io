import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform"
        >
          SW
        </a>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex space-x-8 items-center bg-white/5 px-8 py-3 rounded-full border border-white/5 backdrop-blur-md">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:text-shadow-glow transition-all"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden xl:block">
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 rounded-full hover:bg-blue-50 transition-all font-semibold text-sm"
          >
            Resume <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 right-0 bg-[#0f172a] border-b border-slate-800 p-6 xl:hidden flex flex-col space-y-4 shadow-2xl z-40"
            >
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-blue-400 py-2 border-b border-slate-800/50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                className="text-blue-400 font-medium py-2 flex items-center gap-2"
              >
                Download Resume <ArrowRight size={16} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
