import React from 'react';
import resumeData from '../resume.json';
import { Helmet } from 'react-helmet-async';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <Helmet>
                <title>Samuel Wakoli | Experience</title>
                <meta name="description" content="Professional experience as a Full Stack Developer." />
            </Helmet>

            <h1 className="text-3xl font-bold text-white mb-8">experience.jsx</h1>

            <div className="relative border-l-2 border-gray-600 ml-6 space-y-12">
                {resumeData.experience.map((job, index) => (
                    <div key={index} className="relative pl-12">
                        <div className="absolute top-0 -left-3 border-4 border-blue-500 rounded-full w-6 h-6" style={{ backgroundColor: 'var(--ide-bg)' }}></div>

                        <div className="p-6 rounded-lg border border-gray-600 hover:border-blue-500/50 transition-colors" style={{ backgroundColor: 'var(--ide-sidebar)' }}>
                            <div className="flex flex-wrap justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-white flex items-center">
                                        <Briefcase size={20} className="mr-2 text-blue-400" />
                                        {job.position}
                                    </h2>
                                    <h3 className="text-xl text-blue-300 mt-1">{job.company}</h3>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center text-gray-400 text-sm justify-end mb-1">
                                        <Calendar size={14} className="mr-1" />
                                        {job.startDate} — {job.endDate}
                                    </div>
                                    <div className="flex items-center text-gray-500 text-xs justify-end">
                                        <MapPin size={12} className="mr-1" />
                                        Remote/Hybrid
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-4 font-light leading-relaxed">
                                {job.summary}
                            </p>

                            {job.highlights && (
                                <div className="p-4 rounded text-sm text-gray-400 font-mono" style={{ backgroundColor: 'var(--ide-bg)' }}>
                                    <h4 className="text-gray-500 mb-2">// Key Achievements</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        {job.highlights.map((h, i) => (
                                            <li key={i}>{h}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <h1 className="text-3xl font-bold text-white mt-16 mb-8">education.json</h1>
            <div className="grid gap-4">
                {resumeData.education.map((edu, index) => (
                    <div key={index} className="p-4 border border-gray-600 rounded flex items-center justify-between" style={{ backgroundColor: 'var(--ide-sidebar)' }}>
                        <div>
                            <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                            <p className="text-blue-300">{edu.area} ({edu.studyType})</p>
                        </div>
                        <div className="text-gray-400 text-sm">
                            {edu.startDate} - {edu.endDate}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
