import { Card } from "../Card";
import profile from "../../config/profile.json";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export const ExperienceCard = () => {
  const formatDescription = (description) => {
    if (!description) return null;
    return description.split("\n").map((line, i) => {
      const colonIndex = line.indexOf(":");
      if (colonIndex !== -1) {
        const label = line.substring(0, colonIndex + 1);
        const rest = line.substring(colonIndex + 1);
        return (
          <div key={i} className="mb-2 last:mb-0">
            <span className="font-bold text-slate-100">{label}</span>
            {rest}
          </div>
        );
      }
      return (
        <div key={i} className="mb-2 last:mb-0">
          {line}
        </div>
      );
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Card className="col-span-12 row-span-2 group/exp">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover/exp:scale-110 transition-transform">
          <Briefcase size={20} />
        </div>
        <h3 className="text-xl font-bold text-white uppercase tracking-wider">
          Experience
        </h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative border-l border-slate-800 ml-3 space-y-12"
      >
        {profile.experience.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-8 group/item"
          >
            <span className="absolute -left-[5.5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-700 group-hover/item:bg-blue-500 group-hover/item:scale-125 transition-all ring-4 ring-slate-950"></span>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h4 className="text-lg font-bold text-white group-hover/item:text-blue-300 transition-colors">
                {exp.role}
              </h4>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800/50 uppercase tracking-widest">
                {exp.year}
              </span>
            </div>
            <div className="text-blue-400/80 text-sm font-medium mb-4 flex items-center gap-2 flex-wrap">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0"></span>
              {exp.company}
              {exp.location && (
                <div className="text-slate-500 text-xs font-medium">
                  <span className="mx-1">—</span>
                  {exp.location}
                </div>
              )}
            </div>
            <div className="text-slate-400 text-sm leading-relaxed glass p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors shadow-inner">
              {formatDescription(exp.description)}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
};
