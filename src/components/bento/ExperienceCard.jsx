import { Card } from "../Card";
import profile from "../../config/profile.json";
import { Briefcase } from "lucide-react";

export const ExperienceCard = () => {
  const formatDescription = (description) => {
    if (!description) return null;
    return description.split("\n").map((line, i) => {
      const colonIndex = line.indexOf(":");
      if (colonIndex !== -1) {
        const label = line.substring(0, colonIndex + 1);
        const rest = line.substring(colonIndex + 1);
        return (
          <span key={i} className="block mb-2 last:mb-0">
            <span className="font-bold text-slate-100">{label}</span>
            {rest}
          </span>
        );
      }
      return (
        <span key={i} className="block mb-2 last:mb-0">
          {line}
        </span>
      );
    });
  };

  return (
    <Card className="col-span-12 row-span-2">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
          <Briefcase size={20} />
        </div>
        <h3 className="text-xl font-bold text-white">Experience</h3>
      </div>

      <div className="relative border-l border-slate-800 ml-3 space-y-8">
        {profile.experience.map((exp, index) => (
          <div key={index} className="relative pl-8 group">
            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors ring-4 ring-slate-950"></span>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                {exp.role}
              </h4>
              <span className="text-xs font-mono text-slate-500">{exp.year}</span>
            </div>
            <div className="text-blue-400/80 text-sm font-medium mb-3">
              {exp.company}
            </div>
            <div className="text-slate-400 text-sm leading-relaxed">
              {formatDescription(exp.description)}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
