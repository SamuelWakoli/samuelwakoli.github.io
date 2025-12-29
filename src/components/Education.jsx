import { Section } from "./Section";
import profile from "../config/profile.json";
import { GraduationCap, Calendar } from "lucide-react";

export const Education = () => {
  return (
    <Section id="education">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <GraduationCap className="w-8 h-8 text-blue-500" />
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Education
          </h2>
        </div>

        <div className="space-y-8">
          {profile.education.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full group-hover:bg-blue-600/20 transition-all"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {edu.school}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full text-sm">
                    <Calendar size={14} />
                    <span>{edu.year}</span>
                  </div>
                </div>
                <div className="text-xl text-blue-200 mb-4 font-medium">
                  {edu.degree}
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
