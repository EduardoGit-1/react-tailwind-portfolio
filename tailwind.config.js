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
    },
    extend: {
      inset: {
        '17': '68px',
        '26': '104px'
      },
      transitionProperty: {
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [

  ],
}
