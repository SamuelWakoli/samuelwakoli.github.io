import { Section } from './Section'
import profile from '../config/profile.json'
import { Briefcase } from 'lucide-react'

export const Experience = () => {
    return (
        <Section id="experience">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex items-center justify-center gap-4 mb-16">
                    <Briefcase className="w-8 h-8 text-blue-500" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Experience</h2>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                    {profile.experience.map((exp, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                            {/* Icon Marker */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <Briefcase size={18} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                            </div>

                            {/* Content Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover:border-blue-500/30 transition-all">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                    <h3 className="font-bold text-white text-lg group-hover:text-blue-300 transition-colors">{exp.role}</h3>
                                    <time className="font-mono text-xs text-slate-500">{exp.year}</time>
                                </div>
                                <div className="text-blue-400 font-medium mb-3 text-sm">{exp.company}</div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
