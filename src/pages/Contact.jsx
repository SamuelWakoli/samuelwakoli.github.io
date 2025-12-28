import React from 'react';
import resumeData from '../resume.json';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <div className="max-w-3xl mx-auto font-mono text-sm sm:text-base">
            <Helmet>
                <title>Samuel Wakoli | Contact</title>
                <meta name="description" content="Contact Samuel Wakoli" />
            </Helmet>

            <h1 className="text-3xl font-bold text-white mb-6 font-sans">contact.css</h1>

            <div className="p-6 sm:p-10 rounded border border-gray-600 shadow-lg overflow-x-auto" style={{ backgroundColor: 'var(--ide-sidebar)' }}>
                <pre className="text-blue-300">
                    {`.contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
`}
                </pre>
                <pre className="text-green-300 mt-4">
                    {`.social-links {
    margin-top: 20px;
}
`}
                </pre>

                <div className="mt-8 space-y-2">
                    <div>
                        <span className="text-yellow-400">.email</span> <span className="text-white">{`{`}</span>
                        <div className="pl-8 text-gray-300">
                            content: <a href={`mailto:${resumeData.basics.email}`} className="text-orange-300 hover:underline">"{resumeData.basics.email}"</a>;
                            <br />
                            cursor: pointer;
                        </div>
                        <span className="text-white">{`}`}</span>
                    </div>

                    <div>
                        <span className="text-yellow-400">.phone</span> <span className="text-white">{`{`}</span>
                        <div className="pl-8 text-gray-300">
                            content: <span className="text-orange-300">"{resumeData.basics.phone}"</span>;
                        </div>
                        <span className="text-white">{`}`}</span>
                    </div>

                    {resumeData.basics.profiles.map(p => (
                        <div key={p.network}>
                            <span className="text-yellow-400">.{p.network.toLowerCase()}</span> <span className="text-white">{`{`}</span>
                            <div className="pl-8 text-gray-300">
                                url: <a href={p.url} target="_blank" rel="noreferrer" className="text-orange-300 hover:underline">"{p.url}"</a>;
                            </div>
                            <span className="text-white">{`}`}</span>
                        </div>
                    ))}
                </div>
                <pre className="text-gray-500 mt-8">
                    {`/* 
 * Feel free to reach out for collaborations 
 * or just a friendly hello! 
 */`}
                </pre>
            </div>
        </div>
    );
};

export default Contact;
