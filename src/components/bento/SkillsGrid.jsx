import { Card } from '../Card'
import profile from '../../config/profile.json'

export const SkillsGrid = () => {
    // Only use unique skills, no need to duplicate for marquee
    const skills = profile.skills

    return (
        <Card className="col-span-12 md:col-span-12 row-span-1" noPadding>
            <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-6">Technical Skills</h3>

                <div className="grid grid-cols-2 small:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {skills.map((skill, i) => (
                        <div key={i} className="flex flex-col items-center justify-center h-[100px] bg-slate-900/40 rounded-xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all group">
                            <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    )
}
