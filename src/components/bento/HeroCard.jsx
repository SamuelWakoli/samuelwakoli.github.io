import { Card } from '../Card'
import profile from '../../config/profile.json'
import { MapPin, Smile } from 'lucide-react'

export const HeroCard = () => {
    return (
        <Card className="col-span-12 md:col-span-12 row-span-2 relative overflow-hidden group">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10 h-full">

                {/* Profile Image Container */}
                <div className="relative shrink-0">
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl shadow-blue-500/20 relative z-10">
                        <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                    </div>
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 blur-[50px] opacity-40 -z-10 rounded-full"></div>
                </div>

                <div className="text-center md:text-left flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available for work
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        {profile.name}
                    </h1>
                    <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-4">
                        {profile.role}
                    </h2>
                    <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto md:mx-0">
                        {profile.bio}
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 text-sm mt-6">
                        <MapPin size={16} />
                        {profile.location}
                    </div>
                </div>
            </div>

            {/* Background Gradient/Mesh */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/10 to-transparent blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        </Card>
    )
}
