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
                        {edu.description && (
                            <div className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                                {edu.description}
                            </div>
                        )}
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

            <div className="space-y-4">
                {profile.certifications.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        className="block group relative p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800 transition-all"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-slate-200 font-bold group-hover:text-purple-300 transition-colors text-lg flex items-center gap-2">
                                    {cert.name}
                                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h4>
                                {/* Removed issuer since it's typically part of the name in the resume */}
                            </div>
                        </div>
                        {cert.description && (
                            <p className="text-slate-400 text-sm mt-3 leading-relaxed">{cert.description}</p>
                        )}
                    </a>
                ))}
            </div>
        </Card>
    )
}
