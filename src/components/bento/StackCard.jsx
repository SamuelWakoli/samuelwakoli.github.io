import { Card } from "../Card";
import profile from "../../config/profile.json";
import { motion } from "framer-motion";

export const StackCard = () => {
  // Duplicate skills for seamless loop
  const skills = [...profile.skills, ...profile.skills];

  return (
    <Card
      className="col-span-12 md:col-span-4 row-span-1 overflow-hidden"
      noPadding
    >
      <div className="p-6 pb-0">
        <h3 className="text-lg font-bold text-white mb-1">Tech Stack</h3>
        <p className="text-slate-400 text-sm">My favorite tools</p>
      </div>

      <div className="relative flex overflow-x-hidden mt-6 pb-8 pointer-events-none fade-x-mask">
        <motion.div
          className="flex gap-4 px-4"
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-16 h-16 bg-slate-800/50 rounded-xl flex items-center justify-center border border-slate-700/50"
            >
              <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
            </div>
          ))}
        </motion.div>
      </div>
    </Card>
  );
};
