/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, jsx}'],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'htall': { 'raw': '(min-height: 1450px)' },
      'hverytall': { 'raw': '(min-height: 1800px)' },
      'h4k': { 'raw': '(min-height: 2100px)' },
    },
    extend: {
      inset: {
        '17': '68px',
        '26': '104px'
      },
      transitionProperty: {
        'spacing': 'margin, padding',
        'width': 'width',
        'size' : 'width, height',
      },

    },
  },
  plugins: [

  ],
}
