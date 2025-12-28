import React from 'react';
import resumeData from '../resume.json';
import { Helmet } from 'react-helmet-async';

const logoMap = {
    'Kotlin': 'kotlin/kotlin-original.svg',
    'Dart': 'dart/dart-original.svg',
    'JavaScript': 'javascript/javascript-original.svg',
    'TypeScript': 'typescript/typescript-original.svg',
    'HTML': 'html5/html5-original.svg',
    'SQL': 'mysql/mysql-original.svg',
    'Android SDK': 'android/android-original.svg',
    'Flutter': 'flutter/flutter-original.svg',
    'Jetpack Compose': null,
    'Kotlin Multiplatform': 'kotlin/kotlin-original.svg',
    'Node.js': 'nodejs/nodejs-original.svg',
    'Firebase': 'firebase/firebase-plain.svg',
    'Google Cloud Platform': 'googlecloud/googlecloud-original.svg',
    'Rest API': null,
    'Git': 'git/git-original.svg',
    'Bash': 'bash/bash-original.svg',
    'PowerShell': 'powershell/powershell-original.svg',
    'Figma': 'figma/figma-original.svg',
    'Writerside': null
};

const getLogoUrl = (skill) => {
    if (skill === 'Jetpack Compose') return 'https://developer.android.com/static/images/spot-icons/jetpack-compose.svg';
    if (skill === 'Kotlin Multiplatform') return 'https://plugins.jetbrains.com/files/14936/921855/icon/default.png';
    if (skill === 'Writerside') return 'https://media.licdn.com/dms/image/v2/D4E0BAQE_aLDpIojePQ/company-logo_200_200/company-logo_200_200/0/1721906629311/writerside_logo?e=2147483647&v=beta&t=uK7kLmCMbCJpNIvDnpGHv4nBQ610qngXmpHHLjVkmRw';
    const path = logoMap[skill];
    if (path) return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;
    return null;
};

const SkillCategory = ({ title, skills }) => (
    <div className="mb-8">
        <h3 className="text-xl font-bold text-purple-400 mb-4 sticky top-0 p-2 border-b border-gray-700" style={{ backgroundColor: 'var(--ide-bg)' }}>
            import <span className="text-green-400">{`{ ${title} }`}</span> from <span className="text-yellow-300">'./skills'</span>;
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map(skill => (
                <div key={skill} className="flex flex-col items-center p-4 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-gray-600" style={{ backgroundColor: 'var(--ide-sidebar)' }}>
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        {getLogoUrl(skill) ? (
                            <img src={getLogoUrl(skill)} alt={skill} className="max-w-full max-h-full drop-shadow-md group-hover:scale-110 transition-transform" />
                        ) : (
                            <div className="text-2xl font-bold text-gray-500">{skill[0]}</div>
                        )}
                    </div>
                    <span className="text-center text-sm font-medium text-gray-300 group-hover:text-white">{skill}</span>
                </div>
            ))}
        </div>
    </div>
);

const Skills = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Helmet>
                <title>Samuel Wakoli | Skills</title>
                <meta name="description" content="Technical skills including Kotlin, Flutter, Android, and Backend technologies." />
            </Helmet>
            <h1 className="text-3xl font-bold text-white mb-8">skills.tsx</h1>

            <SkillCategory title="Languages" skills={resumeData.skills.languages} />
            <SkillCategory title="Mobile Development" skills={resumeData.skills.mobile} />
            <SkillCategory title="Backend & Cloud" skills={resumeData.skills.backend} />
            <SkillCategory title="Tools & Version Control" skills={resumeData.skills.tools} />
        </div>
    );
};

export default Skills;
