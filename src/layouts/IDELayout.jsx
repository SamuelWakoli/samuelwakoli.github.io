import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Terminal from '../components/Terminal';
import { Menu, FileText, FileDown } from 'lucide-react';

const IDELayout = () => {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="flex h-screen w-screen overflow-hidden" style={{ backgroundColor: 'var(--ide-bg)', color: 'var(--ide-text)' }}>
            {/* Activity Bar */}
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

            {/* Sidebar */}
            <Sidebar toggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)} isTerminalOpen={isTerminalOpen} />

            {/* Mobile Header */}
            <div className="md:hidden absolute top-0 left-0 right-0 h-10 flex items-center px-4 z-50 border-b border-gray-700" style={{ backgroundColor: 'var(--ide-activity)' }}>
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="mr-2">
                    <Menu size={20} />
                </button>
                <span className="font-bold text-sm">Samuel Wakoli</span>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col relative pt-10 md:pt-0">
                <div className="flex-1 overflow-auto p-4 md:p-8" style={{ backgroundColor: 'var(--ide-bg)' }}>
                    <Outlet />
                </div>

                {/* Terminal Panel */}
                {isTerminalOpen && (
                    <div className="h-64 border-t border-gray-700 p-2 overflow-hidden flex flex-col" style={{ backgroundColor: 'var(--ide-panel)' }}>
                        <Terminal onClose={() => setIsTerminalOpen(false)} />
                    </div>
                )}

                {/* Status Bar */}
                <div className="h-6 text-white text-xs flex items-center px-2 select-none justify-between" style={{ backgroundColor: 'var(--ide-activity)' }}>
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
                        <div className="hover:bg-white/20 px-2 h-full cursor-pointer" title="File Encoding">UTF-8</div>
                        <div className="hover:bg-white/20 px-2 h-full cursor-pointer" title="Language Mode">JavaScript React</div>
                        <div className="hover:bg-white/20 px-2 h-full cursor-pointer" title="Formatter">Prettier</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IDELayout;
