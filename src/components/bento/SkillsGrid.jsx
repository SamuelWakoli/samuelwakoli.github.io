import { Card } from "../Card";
import profile from "../../config/profile.json";

export const SkillsGrid = () => {
  // Skills are now grouped in profile.json
  const skillGroups = profile.skills;

  return (
    <Card className="col-span-12 md:col-span-12 row-span-1" noPadding>
      <div className="p-6 md:p-8 space-y-8">
        <h3 className="text-xl font-bold text-white mb-2">Technical Skills</h3>

        {skillGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4 border-b border-slate-800 pb-2 inline-block">
              {group.category}
            </h4>

            <div className="grid grid-cols-2 small:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {group.items.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center h-[100px] bg-slate-900/40 rounded-xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all group"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      // Fallback if generic icon fails or for text-only skills
                      e.target.style.display = "none";
                      e.target.nextSibling.classList.remove("text-sm");
                      e.target.nextSibling.classList.add(
                        "text-lg",
                        "font-bold",
                        "text-blue-200",
                      );
                    }}
                  />
                  <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors text-center px-2">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
