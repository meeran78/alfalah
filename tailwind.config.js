/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion1.jpg")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site.svg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  plugins: [],
}

