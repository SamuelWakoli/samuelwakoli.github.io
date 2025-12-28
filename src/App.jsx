import { Sidebar, MobileDrawer } from './components/Sidebar'
import { HeroCard } from './components/bento/HeroCard'
import { SkillsGrid } from './components/bento/SkillsGrid'
import { ExperienceCard } from './components/bento/ExperienceCard'
import { EducationCard, CertificationCard } from './components/bento/EducationCard'
import { AwardsCard } from './components/bento/AwardsCard'
import { SocialCard } from './components/bento/SocialCard'
import { LanguagesCard } from './components/bento/LanguagesCard'

function App() {
    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 selection:bg-blue-500/30 font-sans flex">
            {/* 1. Sidebar (Desktop) */}
            <Sidebar />

            {/* 2. Mobile Drawer */}
            <MobileDrawer />

            {/* 3. Main Content Area */}
            <main className="flex-1 p-4 md:p-8 lg:p-12 scroll-smooth">
                <div className="max-w-7xl mx-auto space-y-6">

                    {/* Bento Grid Layout - IDs placed directly on Cards or Wrappers for Scroll Spy precision */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div id="home" className="col-span-1 md:col-span-12">
                            <HeroCard />
                        </div>
                    </div>

                    <div id="skills" className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <SkillsGrid />
                        <LanguagesCard />
                    </div>

                    <div id="experience" className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <ExperienceCard />
                    </div>

                    {/* Education Section containing nested subsections */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* ID on the wrapper for granularity */}
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
                    </div>

                    <div id="contact" className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <SocialCard />
                    </div>

                    <footer className="text-center text-slate-600 text-sm py-12">
                        <p>© {new Date().getFullYear()} Samuel Wakoli. Built with React & Tailwind.</p>
                    </footer>
                </div>
            </main>
        </div>
    )
}

export default App
