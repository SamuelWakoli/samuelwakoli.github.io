import React from 'react';
import resumeData from '../resume.json';
import { Helmet } from 'react-helmet-async';

const Resume = () => {
    return (
        <div className="max-w-4xl mx-auto font-mono text-sm">
            <Helmet>
                <title>Samuel Wakoli | Resume</title>
                <meta name="description" content="Resume of Samuel Wakoli - Full Stack Developer" />
            </Helmet>

            <h1 className="text-3xl font-bold text-white mb-6 font-sans">resume.json</h1>

            <div className="rounded border border-gray-600 overflow-hidden" style={{ backgroundColor: 'var(--ide-sidebar)' }}>
                <div className="flex items-center px-4 py-2 border-b border-gray-700 text-gray-400 text-xs">
                    <span>1 - {JSON.stringify(resumeData, null, 2).split('\n').length} lines</span>
                </div>
                <pre className="p-4 overflow-auto max-h-[70vh] text-xs leading-relaxed">
                    <code className="text-gray-300">
                        {JSON.stringify(resumeData, null, 2).split('\n').map((line, i) => (
                            <div key={i} className="flex">
                                <span className="w-8 text-gray-500 select-none text-right mr-4">{i + 1}</span>
                                <span dangerouslySetInnerHTML={{ __html: syntaxHighlight(line) }} />
                            </div>
                        ))}
                    </code>
                </pre>
            </div>
        </div>
    );
};

// Simple JSON syntax highlighting
function syntaxHighlight(line) {
    return line
        .replace(/"([^"]+)":/g, '<span class="text-purple-400">"$1"</span>:')
        .replace(/: "([^"]+)"/g, ': <span class="text-green-400">"$1"</span>')
        .replace(/: (\d+)/g, ': <span class="text-orange-400">$1</span>')
        .replace(/: (true|false)/g, ': <span class="text-blue-400">$1</span>')
        .replace(/: (null)/g, ': <span class="text-gray-500">$1</span>');
}

export default Resume;
