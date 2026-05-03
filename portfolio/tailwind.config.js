/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      colors: {
        // single accent (signature emerald — "growth")
        accent: {
          DEFAULT: '#34d399',
          hover: '#10b981',
          ink: '#022c22',
          glow: 'rgba(52, 211, 153, 0.18)'
        }
      },
      letterSpacing: {
        tightest: '-0.04em',
        editorial: '-0.03em'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        floatGlow: {
          '0%, 100%': { opacity: '0.55', transform: 'translate(0,0) scale(1)' },
          '50%': { opacity: '0.85', transform: 'translate(-10px,10px) scale(1.05)' }
        },
        cursorBlink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' }
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'float-glow': 'floatGlow 8s ease-in-out infinite',
        'cursor-blink': 'cursorBlink 1.1s steps(1) infinite'
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'noise':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"
      }
    }
  },
  plugins: []
};
