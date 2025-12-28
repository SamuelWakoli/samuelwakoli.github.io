import { Card } from '../Card'
import profile from '../../config/profile.json'
import { GraduationCap, Award, ExternalLink } from 'lucide-react'

export const EducationCard = () => {
    return (
        <Card className="col-span-12 md:col-span-12 row-span-1">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <GraduationCap size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {profile.education.map((edu, index) => (
                    <div key={index} className="relative pl-6 border-l border-slate-800">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                        <h4 className="text-white font-bold text-lg">{edu.school}</h4>
                        <p className="text-blue-200 font-medium mb-1">{edu.degree}</p>
                        <span className="text-slate-500 text-xs font-mono bg-slate-900 px-2 py-0.5 rounded inline-block mb-3">{edu.year}</span>
                        <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                ))}
            </div>
        </Card>
    )
}

export const CertificationCard = () => {
    return (
        <Card className="col-span-12 md:col-span-6 row-span-1">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                    <Award size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-6">
                {profile.certifications.map((cert, index) => (
                    <div key={index} className="group relative">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-slate-200 font-medium group-hover:text-purple-300 transition-colors text-base">{cert.name}</h4>
                                <p className="text-slate-500 text-xs mt-0.5">{cert.issuer}</p>
                            </div>
                            <span className="text-slate-600 text-xs font-mono">{cert.year}</span>
                        </div>
                        {cert.description && (
                            <p className="text-slate-400 text-sm mt-2 leading-relaxed">{cert.description}</p>
                        )}
                        {cert.link && cert.link !== "#" && (
                            <a href={cert.link} target="_blank" className="inline-flex items-center gap-1 text-purple-400/80 text-xs mt-2 hover:text-purple-300 transition-colors">
                                View Certificate <ExternalLink size={10} />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </Card>
    )
}
