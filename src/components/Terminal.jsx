import React, { useState, useEffect, useRef } from 'react';
import resumeData from '../resume.json';

const Terminal = ({ onClose }) => {
    const [history, setHistory] = useState([
        { text: "Welcome to Samuel Wakoli's Portfolio Terminal (v1.0.0)", type: 'system' },
        { text: "Type 'help' to see available commands.", type: 'system' }
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (cmd) => {
        const trimmed = cmd.trim().toLowerCase();
        const args = trimmed.split(' ');
        const command = args[0];

        const newHistory = [...history, { text: `> ${cmd}`, type: 'user' }];

        switch (command) {
            case 'help':
                newHistory.push({
                    text: `Available commands:
  help      - Show this help message
  about     - Display profile summary
  skills    - List skills
  exp       - List experience summary
  contact   - Show contact info
  clear     - Clear terminal
  exit      - Close terminal`,
                    type: 'output'
                });
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'about':
                newHistory.push({ text: resumeData.basics.summary, type: 'output' });
                break;
            case 'skills':
                const skills = Object.entries(resumeData.skills).map(([cat, list]) => `${cat.toUpperCase()}: ${list.join(', ')}`).join('\n');
                newHistory.push({ text: skills, type: 'output' });
                break;
            case 'exp':
                const exp = resumeData.experience.map(e => `${e.position} @ ${e.company} (${e.startDate} - ${e.endDate})`).join('\n');
                newHistory.push({ text: exp, type: 'output' });
                break;
            case 'contact':
                newHistory.push({ text: `Email: ${resumeData.basics.email}\nPhone: ${resumeData.basics.phone}\nGitHub: github.com/samuelwakoli`, type: 'output' });
                break;
            case 'exit':
                onClose();
                return;
            case '':
                break;
            default:
                newHistory.push({ text: `Command not found: ${command}. Type 'help' for options.`, type: 'error' });
        }

        setHistory(newHistory);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div className="flex flex-col h-full font-mono text-sm">
            <div className="flex items-center justify-between border-b border-gray-700 px-4 py-1 text-gray-400" style={{ backgroundColor: 'var(--ide-sidebar)' }}>
                <div className="flex space-x-4">
                    <span className="cursor-pointer border-b border-orange-500 text-white">TERMINAL</span>
                </div>
                <div className="cursor-pointer hover:text-white" onClick={onClose} title="Close Terminal">×</div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 text-gray-300" style={{ backgroundColor: 'var(--ide-panel)' }}>
                {history.map((line, i) => (
                    <div key={i} className={`mb-1 whitespace-pre-wrap ${line.type === 'error' ? 'text-red-400' : line.type === 'user' ? 'text-white font-bold' : 'text-gray-300'}`}>
                        {line.text}
                    </div>
                ))}
                <div className="flex items-center text-white">
                    <span className="mr-2 text-green-400">➜</span>
                    <span className="mr-2 text-blue-400 py-1">~</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-white font-mono"
                        autoFocus
                    />
                </div>
                <div ref={bottomRef} />
            </div>
        </div>
    );
};

export default Terminal;
