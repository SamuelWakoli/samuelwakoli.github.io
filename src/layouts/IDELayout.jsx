import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Terminal from '../components/Terminal';
import { Menu, FileText, FileDown, X, Terminal as TerminalIcon } from 'lucide-react';

const IDELayout = () => {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="flex h-screen w-screen overflow-hidden" style={{ backgroundColor: 'var(--ide-bg)', color: 'var(--ide-text)' }}>
            {/* Activity Bar - Desktop only */}
            <div className="w-12 flex-col items-center py-4 border-r border-gray-700 hidden md:flex" style={{ backgroundColor: 'var(--ide-activity)' }}>
                <Link
                    to="/"
                    title="Explorer"
                    className={`mb-4 cursor-pointer p-2 border-l-2 ${location.pathname !== '/pdf' ? 'opacity-100 border-white' : 'opacity-50 border-transparent hover:opacity-100'}`}
                >
                    <FileText size={24} />
                </Link>
                <a
                    href="/Resume_ Samuel Wakoli.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Download Resume PDF"
                    className="mb-4 cursor-pointer p-2 opacity-50 hover:opacity-100 border-l-2 border-transparent"
                >
                    <FileDown size={24} />
                </a>
            </div>

            {/* Sidebar - Desktop */}
            <Sidebar toggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)} isTerminalOpen={isTerminalOpen} />

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={closeSidebar}
                />
            )}

            {/* Mobile Sidebar */}
            <div
                className={`md:hidden fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                style={{ backgroundColor: 'var(--ide-sidebar)' }}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <span className="font-bold text-white">Explorer</span>
                    <button onClick={closeSidebar} className="p-1 hover:bg-white/10 rounded">
                        <X size={20} />
                    </button>
                </div>
                <nav className="p-2">
                    {[
                        { name: 'README.md', path: '/', label: 'About Me' },
                        { name: 'resume.json', path: '/resume', label: 'Resume Data' },
                        { name: 'skills.tsx', path: '/skills', label: 'Skills' },
                        { name: 'experience.jsx', path: '/experience', label: 'Experience' },
                        { name: 'contact.css', path: '/contact', label: 'Contact' },
                    ].map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={closeSidebar}
                            className={`block px-4 py-3 rounded mb-1 ${location.pathname === item.path ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5'}`}
                        >
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-gray-500">{item.label}</div>
                        </Link>
                    ))}
                </nav>
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
                    <button
                        onClick={() => { setIsTerminalOpen(!isTerminalOpen); closeSidebar(); }}
                        className="flex items-center w-full px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white"
                    >
                        <TerminalIcon size={16} className="mr-2" />
                        {isTerminalOpen ? 'Hide Terminal' : 'Show Terminal'}
                    </button>
                    <a
                        href="/Resume_ Samuel Wakoli.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full px-4 py-2 mt-2 rounded bg-purple-600 hover:bg-purple-500 text-white"
                    >
                        <FileDown size={16} className="mr-2" />
                        Download Resume
                    </a>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 h-12 flex items-center justify-between px-4 z-30 border-b border-gray-700" style={{ backgroundColor: 'var(--ide-activity)' }}>
                <div className="flex items-center">
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="mr-3 p-1">
                        <Menu size={24} />
                    </button>
                    <span className="font-bold">Samuel Wakoli</span>
                </div>
                <button
                    onClick={() => setIsTerminalOpen(!isTerminalOpen)}
                    className={`p-2 rounded ${isTerminalOpen ? 'bg-white/20' : 'hover:bg-white/10'}`}
                    title="Toggle Terminal"
                >
                    <TerminalIcon size={20} />
                </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col relative pt-12 md:pt-0">
                <div className="flex-1 overflow-auto p-4 md:p-8" style={{ backgroundColor: 'var(--ide-bg)' }}>
                    <Outlet />
                </div>

                {/* Terminal Panel */}
                {isTerminalOpen && (
                    <div className="h-48 md:h-64 border-t border-gray-700 p-2 overflow-hidden flex flex-col" style={{ backgroundColor: 'var(--ide-panel)' }}>
                        <Terminal onClose={() => setIsTerminalOpen(false)} />
                    </div>
                )}

                {/* Status Bar - Hidden on very small screens */}
                <div className="h-6 text-white text-xs items-center px-2 select-none justify-between hidden sm:flex" style={{ backgroundColor: 'var(--ide-activity)' }}>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center hover:bg-white/20 px-2 h-full cursor-pointer" title="Git Branch">
                            <span className="mr-1">main*</span>
                        </div>
                        <div className="flex items-center hover:bg-white/20 px-2 h-full cursor-pointer" title="No Issues">
                            <span className="mr-1">✓ 0 errors</span>
                            <span className="mr-1">0 warnings</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="hover:bg-white/20 px-2 h-full cursor-pointer hidden md:block" title="File Encoding">UTF-8</div>
                        <div className="hover:bg-white/20 px-2 h-full cursor-pointer hidden lg:block" title="Language Mode">JavaScript React</div>
                        <div className="hover:bg-white/20 px-2 h-full cursor-pointer" title="Formatter">Prettier</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IDELayout;
