import { Section } from './Section'
import profile from '../config/profile.json'
import { Award, CheckCircle } from 'lucide-react'

export const Certifications = () => {
    return (
        <Section id="certifications">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex items-center justify-center gap-4 mb-12">
                    <Award className="w-8 h-8 text-purple-500" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Certifications</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {profile.certifications.map((cert, index) => (
                        <div key={index} className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-purple-500/30 transition-colors group">
                            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                <CheckCircle size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{cert.name}</h3>
                                <div className="text-slate-400 text-sm mb-2">{cert.issuer}</div>
                                <span className="text-xs font-mono text-slate-500 px-2 py-1 bg-slate-800 rounded">{cert.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
