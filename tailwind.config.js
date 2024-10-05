/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      boxShadow: {
        'custom': '0 0 40px 0 rgba(0, 0, 0, 0.3)'
      },
      colors: {
        'grayCustom': 'rgba(242, 242, 242, 0.8)'
      }
  	},
    fontFamily: {
      mulish: `'Mulish', sans-serif`,
    },
    boxShadow:{
      'custom': '0 10px 10px 0 rgba(241, 241, , 0.1)'
    }
  },
  plugins: [import("tailwindcss-animate")],
}