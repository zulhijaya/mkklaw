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
                primary: '#462837',
                secondary: '#462837',
                'main': {
                    '50': '#f9f6f8',
                    '100': '#f5eef3',
                    '200': '#ecdee7',
                    '300': '#dec3d5',
                    '400': '#c89eb8',
                    '500': '#b57fa0',
                    '600': '#9e6484',
                    '700': '#86506c',
                    '800': '#70445b',
                    '900': '#5f3c4e',
                    '950': '#462837',
                },
            },
            backgroundImage: {
                'hero': "url('../asset/corporate.png')",
            }
        },
    },

    plugins: [],
}
