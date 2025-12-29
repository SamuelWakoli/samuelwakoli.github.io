import { Sidebar, MobileDrawer } from "./components/Sidebar";
import { CustomCursor } from "./components/CustomCursor";
import { HeroCard } from "./components/bento/HeroCard";
import { SkillsGrid } from "./components/bento/SkillsGrid";
import { ExperienceCard } from "./components/bento/ExperienceCard";
import {
  EducationCard,
  CertificationCard,
} from "./components/bento/EducationCard";
import { AwardsCard } from "./components/bento/AwardsCard";
import { SocialCard } from "./components/bento/SocialCard";
import { LanguagesCard } from "./components/bento/LanguagesCard";
import { motion, AnimatePresence } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function App() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-300 selection:bg-blue-500/30 font-sans flex">
      <CustomCursor />
      {/* 1. Sidebar (Desktop) */}
      <Sidebar />

      {/* 2. Mobile Drawer */}
      <MobileDrawer />

      {/* 3. Main Content Area */}
      <motion.main
        initial="hidden"
        animate="visible"
        className="flex-1 p-4 md:p-8 lg:p-12 scroll-smooth"
      >
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Bento Grid Layout */}
          <motion.div
            variants={sectionVariants}
            id="home"
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            <div className="col-span-1 md:col-span-12">
              <HeroCard />
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            id="skills"
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            <SkillsGrid />
            <LanguagesCard />
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            id="experience"
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            <ExperienceCard />
          </motion.div>

          {/* Education Section containing nested subsections */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            <div id="education" className="col-span-12">
              <EducationCard />
            </div>

            <div className="col-span-12 md:col-span-6 space-y-6">
              <div id="certifications">
                <CertificationCard />
              </div>
              <div id="awards">
                <AwardsCard />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            id="contact"
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            <SocialCard />
          </motion.div>

          <footer className="text-center text-slate-600 text-sm py-12">
            <p>
              © {new Date().getFullYear()} Samuel Wakoli. Built with React &
              Tailwind.
            </p>
          </footer>
        </div>
      </motion.main>
    </div>
  );
}

export default App;
