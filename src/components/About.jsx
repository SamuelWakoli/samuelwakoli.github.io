import { Section } from "./Section";
import profile from "../config/profile.json";
import { User } from "lucide-react";

export const About = () => {
  return (
    <Section id="about">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="flex items-center justify-center gap-4 mb-8">
            <User className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">About Me</h2>
          </div>

          <div className="prose prose-lg prose-invert mx-auto text-slate-300 text-center md:text-left">
            <p className="mb-6 leading-relaxed text-lg text-center font-light">
              {profile.bio}
            </p>
            <p className="leading-relaxed text-lg text-center font-light">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. My journey has been driven
              by a logical, persistent problem-solving style and a dedication to
              learning new technologies.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
