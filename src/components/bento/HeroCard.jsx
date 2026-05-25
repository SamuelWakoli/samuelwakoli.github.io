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
    <Card className="col-span-12 md:col-span-12 relative overflow-hidden group">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8"
      >
        <motion.div
          variants={itemVariants}
          className="relative shrink-0 pt-2 md:pt-1"
        >
          <div className="relative z-10 h-32 w-32 overflow-hidden rounded-full border-4 border-slate-800 shadow-2xl shadow-blue-500/20 md:h-40 md:w-40 lg:h-44 lg:w-44 floating">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-[50px] opacity-40 -z-10 rounded-full animate-pulse"></div>
        </motion.div>

        <div className="flex-1 text-center md:text-left">
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-[11px] font-medium text-green-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for work
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-3 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-6xl"
          >
            <span className="text-gradient drop-shadow-sm">{profile.name}</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mb-3 text-lg font-medium text-blue-400 md:text-xl lg:text-2xl"
          >
            {profile.role}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-3xl text-sm leading-8 text-slate-400 md:mx-0 md:text-[15px] lg:text-base"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-500 md:justify-start"
          >
            <MapPin size={16} className="text-blue-500" />
            {profile.location}
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/10 to-transparent blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none group-hover:from-blue-600/20 transition-all duration-700"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-purple-600/10 to-transparent blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
    </Card>
  );
};
