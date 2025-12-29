import { Card } from "../Card";
import profile from "../../config/profile.json";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const HeroCard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Card className="col-span-12 md:col-span-12 row-span-2 relative overflow-hidden group">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10 h-full"
      >
        {/* Profile Image Container */}
        <motion.div
          variants={itemVariants}
          className="relative shrink-0 pt-4 md:pt-0"
        >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl shadow-blue-500/20 relative z-10 floating">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
          </div>
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-[50px] opacity-40 -z-10 rounded-full animate-pulse"></div>
        </motion.div>

        <div className="text-center md:text-left flex-1 pb-4 md:pb-0">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for work
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            <span className="text-gradient drop-shadow-sm">{profile.name}</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl text-blue-400 font-medium mb-4"
          >
            {profile.role}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 leading-relaxed max-w-2xl mx-auto md:mx-0 text-lg"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center md:justify-start gap-2 text-slate-500 text-sm mt-6"
          >
            <MapPin size={16} className="text-blue-500" />
            {profile.location}
          </motion.div>
        </div>
      </motion.div>

      {/* Background Gradient/Mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/10 to-transparent blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none group-hover:from-blue-600/20 transition-all duration-700"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-purple-600/10 to-transparent blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
    </Card>
  );
};
