/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    beige: '#F9F3EE',      // Main Background
                    rose: '#F2D8D5',       // Hero/Accent Section
                    brown: '#5D4037',      // Primary Text
                    clay: '#C68B7A',       // CTA Button
                    tan: '#E8D5C4',        // Subtle Accents
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
