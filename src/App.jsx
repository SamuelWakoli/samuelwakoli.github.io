import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IDELayout from './layouts/IDELayout';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import resumeData from './resume.json';
import { Helmet } from 'react-helmet-async';

function App() {
    return (
        <Router>
            <Helmet>
                <title>{resumeData.basics.name} - Portfolio</title>
                <meta name="description" content={resumeData.basics.summary} />
                <meta name="theme-color" content="#1e1e1e" />
            </Helmet>
            <Routes>
                <Route path="/" element={<IDELayout />}>
                    <Route index element={<About />} />
                    <Route path="resume" element={<Resume />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
