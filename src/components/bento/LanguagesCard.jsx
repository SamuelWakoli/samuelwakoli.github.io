import { Card } from '../Card'
import profile from '../../config/profile.json'
import { Languages } from 'lucide-react'

export const LanguagesCard = () => {
    if (!profile.languages) return null;

    return (
        <Card className="col-span-12 md:col-span-4 row-span-1 bg-gradient-to-br from-green-900/10 to-transparent">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                    <Languages size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Languages</h3>
            </div>

            <div className="space-y-3">
                {profile.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                        <span className="text-white font-medium">{lang.name}</span>
                        <span className="text-slate-400 text-xs">{lang.level}</span>
                    </div>
                ))}
            </div>
        </Card>
    )
}
