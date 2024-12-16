/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        glow: 'glow 2s infinite', // Animasi untuk glow yang bergerak
      },
      keyframes: {
        glow: {
          '0%': {
            backgroundPosition: '-100% 0', // Mulai dari luar kiri
          },
          '100%': {
            backgroundPosition: '100% 0', // Bergerak ke kanan
          },
        },
      },
      backgroundImage: {
        glow: 'linear-gradient(45deg, rgba(255, 255, 55, 0.5), rgba(255, 255, 255, 0.8))', // Gradien cahaya
      },
      backgroundSize: {
        glow: '200% 300%', // Ukuran latar belakang yang lebih besar untuk animasi
      },
    },
  },
  plugins: [],
}