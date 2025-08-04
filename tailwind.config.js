/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Professional Blue-Gray Palette
        'primary': {
          'dark': '#1e2a3a',        // dark navy - headers
          'medium': '#2d4a6b',      // medium blue - navigation  
          'bright': '#4a7ba7',      // bright blue - water services
          'light': '#e8f2ff',       // light blue - backgrounds
          'neutral': '#f5f7fa',     // neutral light - main bg
          'text': '#666b73',        // dark gray - text
        },
        // Service-specific colors
        'heating': {
          'primary': '#ff6b35',     // orange - heating
          'light': '#fff1ec',       // light orange background
          'accent': '#e55a2b',      // darker orange accent
        },
        'water': {
          'primary': '#4a7ba7',     // bright blue - water services
          'light': '#e8f2ff',       // light blue background
          'accent': '#3d6b8f',      // darker blue accent
        },
        'gas': {
          'primary': '#ff6b35',     // orange - gas (same as heating)
          'light': '#fff1ec',       // light orange background
          'accent': '#e55a2b',      // darker orange accent
        },
        // Emergency/Contact
        'emergency': {
          'red': '#e74c3c',         // red - emergency
          'bright': '#dc2626',      // bright red accent
        },
        // Additional utility colors
        'warm': {
          'orange': '#ff6b35',      // main orange
          'light': '#fff1ec',       // light orange
          'accent': '#e55a2b',      // dark orange
        }
      },
      fontFamily: {
        'serif': ['EB Garamond', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}