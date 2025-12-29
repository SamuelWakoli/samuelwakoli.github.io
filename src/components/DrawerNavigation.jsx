import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  User,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Trophy,
  Mail,
} from "lucide-react";

export const DrawerNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { icon: <User size={20} />, label: "Profile", href: "#home" },
    { icon: <Code size={20} />, label: "Technical Skills", href: "#skills" },
    { icon: <Briefcase size={20} />, label: "Experience", href: "#experience" },
    {
      icon: <GraduationCap size={20} />,
      label: "Education",
      href: "#education",
    },
    {
      icon: <Award size={20} />,
      label: "Certifications",
      href: "#certifications",
    },
    { icon: <Trophy size={20} />, label: "Awards", href: "#awards" },
    { icon: <Mail size={20} />, label: "Contact", href: "#contact" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <>
      {/* Fixed Hamburger Button - Right Side, High Visibility */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed top-6 right-6 z-[9999] p-4 rounded-full bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] border border-blue-400 hover:bg-blue-500 transition-all group`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="space-y-1.5 pointer-events-none">
          <span className="block w-6 h-0.5 bg-white group-hover:w-6 transition-all"></span>
          <span className="block w-6 h-0.5 bg-white group-hover:w-4 ml-auto transition-all"></span>
          <span className="block w-6 h-0.5 bg-white group-hover:w-6 transition-all"></span>
        </div>
      </motion.button>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-2 bottom-2 right-2 w-[85vw] md:w-[400px] bg-[#0f172a]/95 border border-white/10 z-[10001] shadow-2xl backdrop-blur-3xl flex flex-col relative overflow-hidden rounded-3xl"
            >
              {/* Decorative gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>

              <div className="p-6 flex justify-between items-center border-b border-white/5 bg-white/5">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-widest uppercase text-sm">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800/50 rounded-full hover:bg-red-500/20 hover:text-red-400 transition-all duration-300"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="space-y-3"
                >
                  {links.map((link, index) => (
                    <motion.a
                      key={index}
                      variants={item}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 p-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all group border border-transparent hover:border-blue-500/30 bg-slate-900/40"
                    >
                      <span className="p-2.5 bg-slate-800 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-lg">
                        {link.icon}
                      </span>
                      <span className="font-medium text-lg tracking-wide">
                        {link.label}
                      </span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              <div className="p-6 border-t border-white/5 bg-slate-950/30">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all"
                >
                  <span className="text-sm uppercase tracking-wider">
                    Download Resume
                  </span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
