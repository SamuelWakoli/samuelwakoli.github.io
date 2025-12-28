import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, Code, Briefcase, GraduationCap, Award, Trophy, Mail, FileText } from 'lucide-react'
import profile from '../config/profile.json'

// Robust Scroll Spy using IntersectionObserver
const useScrollSpy = (ids, offset = 100) => {
    const [activeId, setActiveId] = useState('home')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            {
                rootMargin: `-${offset}px 0px -50% 0px`, // Trigger when element is near top or takes up significant portion
                threshold: 0.1
            }
        )

        ids.forEach((id) => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [ids, offset])

    return activeId
}

// Desktop Sidebar Component
export const Sidebar = () => {
    const sectionIds = ['home', 'skills', 'experience', 'education', 'certifications', 'awards', 'contact']
    const activeSection = useScrollSpy(sectionIds)

    const links = [
        { icon: <User size={20} />, label: 'Profile', href: '#home', id: 'home' },
        { icon: <Code size={20} />, label: 'Skills', href: '#skills', id: 'skills' },
        { icon: <Briefcase size={20} />, label: 'Experience', href: '#experience', id: 'experience' },
        { icon: <GraduationCap size={20} />, label: 'Education', href: '#education', id: 'education' },
        { icon: <Award size={20} />, label: 'Certifications', href: '#certifications', id: 'certifications' },
        { icon: <Trophy size={20} />, label: 'Awards', href: '#awards', id: 'awards' },
        { icon: <Mail size={20} />, label: 'Contact', href: '#contact', id: 'contact' },
    ]

    return (
        <aside className="hidden lg:flex flex-col w-80 h-screen sticky top-0 left-0 bg-[#0f172a]/50 border-r border-white/5 backdrop-blur-xl p-8 overflow-y-auto">
            <div className="mb-12">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{profile.name}</h1>
                <p className="text-slate-500 text-sm mt-2">{profile.role}</p>
            </div>

            <nav className="space-y-2 flex-1">
                {links.map((link, index) => {
                    const isActive = activeSection === link.id
                    return (
                        <a
                            key={index}
                            href={link.href}
                            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all group relative ${isActive
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <span className={`transition-colors ${isActive ? 'text-white' : 'group-hover:text-blue-400'}`}>
                                {link.icon}
                            </span>
                            <span className="font-medium">{link.label}</span>

                            {/* Active Indicator Dot */}
                            {isActive && (
                                <motion.div
                                    layoutId="active-dot"
                                    className="absolute right-4 w-2 h-2 bg-white rounded-full"
                                />
                            )}
                        </a>
                    )
                })}
            </nav>

            <div className="mt-8 pt-8 border-t border-white/5">
                <a href="/resume.pdf" target="_blank" className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transform">
                    <FileText size={18} /> Download Resume
                </a>
            </div>
        </aside>
    )
}

// Mobile specific Drawer (Slide from Left)
export const MobileDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const sectionIds = ['home', 'skills', 'experience', 'education', 'certifications', 'awards', 'contact']
    const activeSection = useScrollSpy(sectionIds)

    const links = [
        { icon: <User size={20} />, label: 'Profile', href: '#home', id: 'home' },
        { icon: <Code size={20} />, label: 'Skills', href: '#skills', id: 'skills' },
        { icon: <Briefcase size={20} />, label: 'Experience', href: '#experience', id: 'experience' },
        { icon: <GraduationCap size={20} />, label: 'Education', href: '#education', id: 'education' },
        { icon: <Award size={20} />, label: 'Certifications', href: '#certifications', id: 'certifications' },
        { icon: <Trophy size={20} />, label: 'Awards', href: '#awards', id: 'awards' },
        { icon: <Mail size={20} />, label: 'Contact', href: '#contact', id: 'contact' },
    ]

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-700 text-white shadow-lg"
            >
                <Menu size={24} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
                        />

                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-4 left-4 w-[80%] max-w-[300px] h-[calc(100vh-32px)] bg-[#0f172a]/95 backdrop-blur-2xl border border-slate-700/50 z-[70] shadow-2xl p-6 rounded-3xl lg:hidden flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <span className="font-bold text-white text-lg">Menu</span>
                                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="space-y-2 flex-1 overflow-y-auto">
                                {links.map((link, index) => {
                                    const isActive = activeSection === link.id
                                    return (
                                        <a
                                            key={index}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isActive
                                                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                                                : 'text-slate-300 hover:bg-slate-800/50'
                                                }`}
                                        >
                                            <span className={isActive ? 'text-blue-400' : 'text-slate-500'}>{link.icon}</span>
                                            <span>{link.label}</span>
                                        </a>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
