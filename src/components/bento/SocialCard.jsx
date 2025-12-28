import { Card } from '../Card'
import profile from '../../config/profile.json'
import { Github, Linkedin, Mail, Play, Code2 } from 'lucide-react'

export const SocialCard = () => {
    return (
        <Card className="col-span-12 md:col-span-12 row-span-1 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-2xl font-bold text-white">Let's work together</h3>
                    <p className="text-slate-400 text-sm mt-1">Open for opportunities.</p>
                </div>

                <div className="flex gap-4 flex-wrap justify-center">
                    <a href={profile.social.github} target="_blank" title="GitHub" className="p-4 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all hover:scale-110">
                        <Github size={20} />
                    </a>
                    {profile.social.linkedin && (
                        <a href={profile.social.linkedin} target="_blank" title="LinkedIn" className="p-4 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all hover:scale-110">
                            <Linkedin size={20} />
                        </a>
                    )}
                    {profile.social.google_play && (
                        <a href={profile.social.google_play} target="_blank" title="Google Play" className="p-4 bg-slate-900 rounded-full text-slate-400 hover:text-green-400 hover:bg-slate-800 border border-slate-800 transition-all hover:scale-110">
                            <Play size={20} />
                        </a>
                    )}
                    {profile.social.google_dev && (
                        <a href={profile.social.google_dev} target="_blank" title="Google Developers" className="p-4 bg-slate-900 rounded-full text-slate-400 hover:text-blue-400 hover:bg-slate-800 border border-slate-800 transition-all hover:scale-110">
                            <Code2 size={20} />
                        </a>
                    )}
                    <a href={`mailto:${profile.social.email}`} title="Email" className="p-4 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-all hover:scale-110 shadow-lg shadow-blue-500/20">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </Card>
    )
}
