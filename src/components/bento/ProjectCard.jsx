import { Card } from '../Card'
import profile from '../../config/profile.json'
import { ArrowUpRight } from 'lucide-react'

export const ProjectCard = () => {
    return (
        <Card className="col-span-12 md:col-span-6 lg:col-span-6 row-span-2" noPadding>
            <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Selected Projects</h3>
                <p className="text-slate-400 mb-6">Some things I've built</p>

                <div className="space-y-4">
                    {profile.projects.map((project, index) => (
                        <a key={index} href={project.link} className="flex gap-4 p-4 rounded-xl bg-slate-900/40 hover:bg-slate-800/60 border border-slate-800 hover:border-slate-700 transition-all group">
                            <div className="w-16 h-16 rounded-lg bg-slate-800 overflow-hidden flex-shrink-0">
                                <img src={project.image || "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&q=80"} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-white font-medium truncate group-hover:text-blue-400 transition-colors">{project.title}</h4>
                                    <ArrowUpRight size={16} className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                                <p className="text-slate-400 text-sm line-clamp-2 mt-1">{project.description}</p>
                                <div className="flex gap-2 mt-3">
                                    {project.tech.slice(0, 3).map((t, i) => (
                                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </Card>
    )
}
