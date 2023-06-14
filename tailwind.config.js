import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],

    theme: {
        extend: {
            fontFamily: {
                urbanist: ['Urbanist', ...defaultTheme.fontFamily.sans],
                jakarta: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#052A24',
                secondary: '#EDB96F',
                'tiber': {
                    '50': '#edfcf6',
                    '100': '#d4f7e8',
                    '200': '#aceed5',
                    '300': '#76dfbd',
                    '400': '#3fc8a0',
                    '500': '#1cad88',
                    '600': '#0f8c6e',
                    '700': '#0c705c',
                    '800': '#0c5949',
                    '900': '#0b493e',
                    '950': '#052a24',
                },
            },
            backgroundImage: {
                'hero': "url('../asset/corporate.png')",
            }
        },
    },

    plugins: [],
}
