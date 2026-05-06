/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        app: {
          bg:     '#141414',
          card:   '#1E1E1E',
          raised: '#262626',
          border: '#2A2A2A',
          muted:  '#555555',
          sub:    '#8A8A8A',
        },
        brand: {
          orange:   '#F05A28',
          'orange-dim': '#3D1A0A',
          lime:     '#C8F500',
          'lime-dim':   '#1E2400',
          lavender: '#E8E4F7',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
