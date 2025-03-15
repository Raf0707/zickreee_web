/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'Amiri', 'sans-serif'],
                arabic: ['Amiri', 'serif'],
                scheherazade: ['Scheherazade New', 'serif']
            },
        },
    },
    plugins: [],
};
