import React from 'react'
import { HeroCard } from './components/bento/HeroCard'
import { StackCard } from './components/bento/StackCard'
import { ProjectCard } from './components/bento/ProjectCard'
import { ExperienceCard } from './components/bento/ExperienceCard'
import { EducationCard, CertificationCard } from './components/bento/EducationCard'
import { SocialCard } from './components/bento/SocialCard'
import { AwardsCard } from './components/bento/AwardsCard'
import { LanguagesCard } from './components/bento/LanguagesCard'
import { DrawerNavigation } from './components/DrawerNavigation'

function App() {
    return (
        <div className="bg-[#020617] min-h-screen text-slate-200 selection:bg-blue-500/30 selection:text-white p-4 md:p-8 pb-32 overflow-x-hidden font-sans">

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full mix-blend-screen animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full mix-blend-screen animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10" id="home">
                {/* Section 1: PROFILE (Resume) -> Hero Card */}
                <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-auto gap-4 md:gap-6 mb-4 md:mb-6">
                    <HeroCard />
                    <div className="grid grid-cols-1 gap-4 md:gap-6 col-span-12 md:col-span-4 row-span-2 h-full">
                        <SocialCard /> {/* Socials are top of resume */}
                        <LanguagesCard /> {/* Often near skills/profile */}
                    </div>
                </div>

                {/* Section 2: TECHNICAL SKILLS (Resume) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-4 md:mb-6" id="skills">
                    <StackCard /> {/* This is the Marquee of skills */}
                    {/* We might want a detailed skills list if the marquee isn't enough, but stack card covers keywords */}
                    <div className="col-span-12 md:col-span-8">
                        {/* Re-using ProjectCard here as showcase of applied skills if needed, or we can keep flow */}
                    </div>
                </div>

                {/* Section 3: EXPERIENCE (Resume) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-4 md:mb-6" id="experience">
                    <ExperienceCard />
                    <ProjectCard /> {/* Projects support Experience */}
                </div>

                {/* Section 4: EDUCATION (Resume) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-4 md:mb-6" id="education">
                    <EducationCard />
                </div>

                {/* Section 5: CERTIFICATIONS (Resume) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-4 md:mb-6" id="certifications">
                    <CertificationCard />
                </div>

                {/* Section 6: AWARDS (Resume) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-4 md:mb-6" id="awards">
                    <AwardsCard />
                </div>

            </div>

            <footer className="text-center text-slate-600 text-sm py-12 relative z-10" id="contact">
                <p>© {new Date().getFullYear()} Samuel Wakoli. Built with React & Tailwind.</p>
            </footer>

            <DrawerNavigation />
        </div>
    )
}

export default App
