import { Section } from './Section'
import profile from '../config/profile.json'
import { Mail, Github, Linkedin, Send } from 'lucide-react'

export const Contact = () => {
    return (
        <Section id="contact">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <div className="glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative z-10">Let's Work Together</h2>
                    <p className="text-slate-300 mb-10 text-lg relative z-10 max-w-2xl mx-auto font-light">
                        I'm currently looking for new opportunities. Whether you have a question about a project or just want to say hi, my inbox is always open!
                    </p>

                    <div className="flex justify-center relative z-10">
                        <a href={`mailto:${profile.social.email}`} className="group flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full hover:bg-blue-50 transition-all font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1">
                            <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            Say Hello
                        </a>
                    </div>

                    <div className="flex justify-center gap-8 mt-16 pt-8 border-t border-slate-700/50 relative z-10">
                        <a href={profile.social.github} target="_blank" className="p-3 bg-slate-800/50 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all transform hover:scale-110">
                            <Github className="w-6 h-6" />
                        </a>
                        {profile.social.linkedin && (
                            <a href={profile.social.linkedin} target="_blank" className="p-3 bg-slate-800/50 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all transform hover:scale-110">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                    </div>

                    <footer className="mt-12 text-slate-600 text-sm relative z-10">
                        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </Section>
    )
}
