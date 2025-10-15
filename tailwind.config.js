/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores de la Fundación Sol de Occidente
        'fsdo-green': '#2D5016', // Verde oscuro del logo
        'fsdo-light-green': '#4A7C59', // Verde claro del checkmark
        'fsdo-yellow': '#F4D03F', // Amarillo del sol
        'fsdo-dark': '#1A1A1A', // Negro para texto
        'fsdo-gray': '#F5F5F5', // Gris claro para fondos
        'fsdo-accent': '#E74C3C', // Rojo para botones y acentos
        
        // Colores masónicos del logo
        'masonic-dark': '#1A0033', // Azul oscuro/noche estrellada
        'masonic-gold': '#FFD700', // Dorado de los símbolos
        'masonic-white': '#FFFFFF', // Blanco
        'masonic-gray': '#D3D3D3', // Gris claro del anillo exterior
        'masonic-black': '#000000', // Negro para contraste
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/fsdo_banne.jpeg')",
      },
    },
  },
  plugins: [],
}
