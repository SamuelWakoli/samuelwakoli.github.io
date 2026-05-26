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
          <div className="relative z-10 h-32 w-32 overflow-hidden rounded-full border-4 border-[color:var(--panel-border)] shadow-2xl shadow-[rgba(37,99,235,0.18)] md:h-40 md:w-40 lg:h-44 lg:w-44 floating">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-[var(--accent-soft-strong)] to-[rgba(124,58,237,0.22)] blur-[50px] opacity-50 animate-pulse"></div>
        </motion.div>

        <div className="flex-1 text-center md:text-left">
          <motion.div
            variants={itemVariants}
            className="theme-chip-success mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--success)] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]"></span>
            </span>
            Available for work
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="theme-title mb-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-6xl"
          >
            <span className="text-gradient drop-shadow-sm">{profile.name}</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="theme-accent mb-3 text-lg font-medium md:text-xl lg:text-2xl"
          >
            {profile.role}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="theme-muted mx-auto max-w-3xl text-sm leading-8 md:mx-0 md:text-[15px] lg:text-base"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="theme-muted mt-5 flex items-center justify-center gap-2 text-sm md:justify-start"
          >
            <MapPin size={16} className="theme-accent" />
            {profile.location}
          </motion.div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/4 -translate-y-1/4 rounded-full bg-gradient-to-br from-[var(--accent-soft-strong)] to-transparent blur-[120px] transition-all duration-700 group-hover:from-[var(--accent-soft)]"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] -translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tr from-[rgba(124,58,237,0.16)] to-transparent blur-[100px]"></div>
    </Card>
  );
};
