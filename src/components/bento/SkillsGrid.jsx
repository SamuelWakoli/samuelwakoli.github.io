import { Card } from "../Card";
import profile from "../../config/profile.json";
import { motion } from "framer-motion";

export const SkillsGrid = () => {
  const skillGroups = profile.skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <Card className="col-span-12 md:col-span-12 row-span-1 group" noPadding>
      <div className="p-6 md:p-8 space-y-8">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          Technical Skills
          <span className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full opacity-50"></span>
        </h3>

        {skillGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="space-y-4">
            <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-[0.2em] mb-4 opacity-70">
              {group.category}
            </h4>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {group.items.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    boxShadow: "0 10px 30px -10px rgba(56, 189, 248, 0.3)",
                  }}
                  className="flex flex-col items-center justify-center h-[110px] bg-slate-900/40 rounded-xl border border-slate-800/60 hover:border-blue-500/50 hover:bg-slate-800/40 transition-colors group/skill relative overflow-hidden"
                >
                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/skill:opacity-100 transition-opacity"></div>

                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 mb-3 group-hover/skill:scale-110 transition-transform duration-300 opacity-80 group-hover/skill:opacity-100 z-10"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.classList.remove("text-sm");
                      e.target.nextSibling.classList.add(
                        "text-lg",
                        "font-bold",
                        "text-blue-200",
                      );
                    }}
                  />
                  <span className="text-xs font-medium text-slate-400 group-hover/skill:text-white transition-colors text-center px-2 z-10">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </Card>
  );
};
