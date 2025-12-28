import { Section } from './Section'
import { motion } from 'framer-motion'
import profile from '../config/profile.json'
import { Cpu } from 'lucide-react'

export const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <Section id="skills">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-center gap-4 mb-16">
                    <Cpu className="w-8 h-8 text-blue-500" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Tech Stack</h2>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    {profile.skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={item}
                            className="group p-6 glass-card rounded-2xl hover:bg-slate-800/80 transition-all hover:-translate-y-2 flex flex-col items-center gap-4 text-center cursor-default"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-12 h-12 relative z-10 transition-transform group-hover:scale-110 drop-shadow-lg"
                                />
                            </div>
                            <span className="font-medium text-slate-300 group-hover:text-white">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    )
}
