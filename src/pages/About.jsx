import React from 'react';
import resumeData from '../resume.json';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto text-gray-300 font-sans leading-relaxed">
            <Helmet>
                <title>Samuel Wakoli | About</title>
                <meta name="description" content={resumeData.basics.summary} />
            </Helmet>

            <h1 className="text-4xl font-bold text-white mb-6">README.md</h1>

            <div className="mb-8 border-b border-gray-700 pb-8">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">Hi, I'm {resumeData.basics.name} 👋</h2>
                <p className="text-lg mb-4">{resumeData.basics.summary}</p>
                <p className="text-gray-400 italic">
                    {resumeData.basics.label} based in {resumeData.basics.location.city}, {resumeData.basics.location.country}.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-green-400 mb-4"># Connect</h3>
                    <ul className="space-y-2">
                        {resumeData.basics.profiles.map(p => (
                            <li key={p.network}>
                                <a href={p.url} target="_blank" rel="noreferrer" className="text-blue-300 hover:underline flex items-center">
                                    <span className="w-24 font-bold text-gray-400">[{p.network}]</span>
                                    {p.username}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href={`mailto:${resumeData.basics.email}`} className="text-blue-300 hover:underline flex items-center">
                                <span className="w-24 font-bold text-gray-400">[Email]</span>
                                {resumeData.basics.email}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* GitHub Section */}
            <div className="mt-12">
                <h3 className="text-xl font-bold text-purple-400 mb-4"># GitHub Activity</h3>
                <div className="p-6 rounded-lg border border-gray-700" style={{ backgroundColor: 'var(--ide-sidebar)' }}>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://avatars.githubusercontent.com/SamuelWakoli"
                                alt="GitHub Avatar"
                                className="w-16 h-16 rounded-full border-2 border-purple-500"
                            />
                            <div>
                                <h4 className="text-xl font-bold text-white">SamuelWakoli</h4>
                                <p className="text-gray-400 text-sm">Full Stack Developer</p>
                            </div>
                        </div>
                        <a
                            href="https://github.com/SamuelWakoli"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white text-sm transition-colors"
                        >
                            View Profile →
                        </a>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center mt-6">
                        <a href="https://github.com/SamuelWakoli?tab=repositories" target="_blank" rel="noreferrer" className="p-4 rounded bg-gray-800 hover:bg-gray-700 transition-colors">
                            <div className="text-2xl font-bold text-green-400">20+</div>
                            <div className="text-gray-400 text-sm">Repositories</div>
                        </a>
                        <a href="https://github.com/SamuelWakoli?tab=followers" target="_blank" rel="noreferrer" className="p-4 rounded bg-gray-800 hover:bg-gray-700 transition-colors">
                            <div className="text-2xl font-bold text-blue-400">50+</div>
                            <div className="text-gray-400 text-sm">Followers</div>
                        </a>
                        <a href="https://github.com/SamuelWakoli?tab=following" target="_blank" rel="noreferrer" className="p-4 rounded bg-gray-800 hover:bg-gray-700 transition-colors">
                            <div className="text-2xl font-bold text-purple-400">3+</div>
                            <div className="text-gray-400 text-sm">Years Active</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
