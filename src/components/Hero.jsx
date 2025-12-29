import { motion } from "framer-motion";
import profile from "../config/profile.json";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden relative"
      id="home"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-blue-200 text-sm font-medium tracking-wide">
              Available for Hire
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
            I'm <span className="text-gradient">{profile.name}</span>
            <br />
            <span className="text-slate-400 text-4xl md:text-6xl">
              {profile.role}
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-1 font-medium"
            >
              <FileText size={20} />
              <span>Resume</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card rounded-full text-slate-300 hover:text-white hover:border-blue-500/50 transition-all transform hover:-translate-y-1"
            >
              <Github size={22} />
            </a>
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-card rounded-full text-slate-300 hover:text-white hover:border-blue-500/50 transition-all transform hover:-translate-y-1"
              >
                <Linkedin size={22} />
              </a>
            )}
            <a
              href={`mailto:${profile.social.email}`}
              className="p-4 glass-card rounded-full text-slate-300 hover:text-white hover:border-blue-500/50 transition-all transform hover:-translate-y-1"
            >
              <Mail size={22} />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-slate-500 font-mono text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              {profile.location}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border border-slate-700/50 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-slate-700/30 animate-[spin_15s_linear_infinite_reverse]"></div>

            {/* Main Image Container */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-900 z-10 glass-card">
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center">
                {/* Fallback pattern if image fails or is loading */}
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating tech icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-3 glass-card rounded-2xl z-20"
            >
              <img
                src="https://skillicons.dev/icons?i=react"
                className="w-10 h-10"
                alt="React"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-10 -left-8 p-3 glass-card rounded-2xl z-20"
            >
              <img
                src="https://skillicons.dev/icons?i=firebase"
                className="w-10 h-10"
                alt="Firebase"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-1/2 -right-12 p-3 glass-card rounded-2xl z-20"
            >
              <img
                src="https://skillicons.dev/icons?i=flutter"
                className="w-10 h-10"
                alt="Flutter"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
