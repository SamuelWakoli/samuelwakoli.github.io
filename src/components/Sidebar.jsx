import React from 'react';
import { FileCode, FileJson, FileText, Folder, Terminal as TerminalIcon, FileDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ toggleTerminal, isTerminalOpen }) => {
    const location = useLocation();

    const files = [
        { name: 'README.md', path: '/', icon: <FileText size={16} className="text-yellow-400" />, tooltip: 'About Me' },
        { name: 'resume.json', path: '/resume', icon: <FileJson size={16} className="text-yellow-300" />, tooltip: 'View Resume Data' },
        { name: 'skills.tsx', path: '/skills', icon: <FileCode size={16} className="text-blue-400" />, tooltip: 'Technical Skills' },
        { name: 'experience.jsx', path: '/experience', icon: <FileCode size={16} className="text-blue-500" />, tooltip: 'Work Experience' },
        { name: 'contact.css', path: '/contact', icon: <FileCode size={16} className="text-purple-400" />, tooltip: 'Contact Information' },
    ];

    return (
        <div className="w-64 border-r border-gray-700 flex-col h-full select-none hidden md:flex" style={{ backgroundColor: 'var(--ide-sidebar)' }}>
            <div className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Explorer</div>

            <div className="flex-1 overflow-y-auto">
                <div className="mb-2">
                    <div className="flex items-center px-4 py-1 hover:bg-white/5 cursor-pointer text-gray-300">
                        <Folder size={16} className="mr-2 text-purple-400" />
                        <span className="font-bold">SAMUEL-WAKOLI</span>
                    </div>

                    <div className="pl-4">
                        {files.map((file) => (
                            <Link
                                key={file.path}
                                to={file.path}
                                title={file.tooltip}
                                className={`flex items-center px-4 py-1 cursor-pointer group ${location.pathname === file.path ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'}`}
                            >
                                <span className="mr-2">{file.icon}</span>
                                <span>{file.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-2 border-t border-gray-700">
                <button
                    onClick={toggleTerminal}
                    title="Toggle Terminal"
                    className={`flex items-center px-3 py-1 w-full text-sm rounded ${isTerminalOpen ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                    <TerminalIcon size={16} className="mr-2" />
                    <span>Terminal</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
