/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ide: {
                    bg: '#1e1e1e',
                    sidebar: '#252526',
                    activity: '#333333',
                    panel: '#1e1e1e',
                    status: '#007acc',
                    text: '#d4d4d4',
                    accent: '#0e639c',
                    folder: '#c699fa',
                    file: '#5fa5f9'
                }
            },
            fontFamily: {
                mono: ['"Fira Code"', 'monospace'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
