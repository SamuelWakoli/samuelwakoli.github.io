import { Card } from '../Card'
import profile from '../../config/profile.json'
import { motion } from 'framer-motion'
import { MapPin, Smile } from 'lucide-react'

export const HeroCard = () => {
    return (
        <Card className="col-span-12 md:col-span-8 row-span-2 relative overflow-hidden group">
            <div className="flex flex-col justify-between h-full relative z-10">
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available for work
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <MapPin size={14} />
                        {profile.location}
                    </div>
                </div>

                <div className="mt-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                        I'm {profile.name}.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-light max-w-lg leading-relaxed">
                        {profile.role}, building <span className="text-blue-400 font-medium">high-performance</span> digital experiences.
                    </p>
                </div>

                <div className="mt-8 flex gap-4">
                    <a href="#contact" className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-colors">
                        Let's talk
                    </a>
                    <a href="/resume.pdf" target="_blank" className="px-6 py-3 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-colors">
                        Resume
                    </a>
                </div>
            </div>

            {/* Background Gradient/Mesh */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        </Card>
    )
}
