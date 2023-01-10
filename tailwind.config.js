/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'opens': ['Open Sans', 'sans-serif']
      },
      backgroundColor: {
        'headerbg': '#E1DFFA',
        'btnbg': '#8980EA',
        'bglow': 'rgba(0,0,0, 0.8)'
      },
      textColor: {
        'headerText': '#8980EA'
      },
      borderRadius: {
        '4': '4px',
        '10': '10px',
        '20': '20px'
      },
      boxShadow: {
        'button': '0px 10px 10px rgba(137, 128, 234, 0.5)'

      },
      zIndex: {
        '2': '2',
        '3': '3'
      },



    },
  },
  plugins: [],
}