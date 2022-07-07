/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            backgroundImage: {
                home: 'url(/src/assets/bg.png)'
            },
            fontFamily: {
                sans: 'Inter, sans-serif', 
            },
            colors: {
                gray: {
                    900: "#BBBBBB",
                }
            },
            keyframes: {
                fadeIn: {
                  '0%': { transform: 'translateY(50px)', opacity: 0 },
                  '100%': { transform: 'translateY(0)', opacity: 1 },
                },
                Popup: {
                    '0%': { transform: 'translateY(-5px)', opacity: 0 },
                    '20%, 50%, 80%': { transform: 'translateY(0)', opacity: 1 },
                    '100%': { transform: 'translateY(-5)', opacity: 0 },
                }
            },
            animation: {
                fadeIn: 'fadeIn 1s ease ',
                Popup: 'Popup 3s ease-in-out forwards',
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
};
