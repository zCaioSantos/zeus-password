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
        },
    },
    plugins: [],
};
