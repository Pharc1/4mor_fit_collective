/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* gray-200 */
        input: "var(--color-input)", /* white */
        ring: "var(--color-ring)", /* red-600 */
        background: "var(--color-background)", /* gray-100 */
        foreground: "var(--color-foreground)", /* black */
        primary: {
          DEFAULT: "var(--color-primary)", /* black */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* red-600 */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-500 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gray-800 */
          foreground: "var(--color-muted-foreground)", /* gray-300 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* yellow-600 */
          foreground: "var(--color-accent-foreground)", /* black */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* black */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* black */
        },
        surface: {
          DEFAULT: "var(--color-surface)", /* gray-800 */
          foreground: "var(--color-surface-foreground)", /* white */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-600 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* yellow-500 */
          foreground: "var(--color-warning-foreground)", /* black */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-500 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        'text-primary': "var(--color-text-primary)", /* black */
        'text-secondary': "var(--color-text-secondary)", /* gray-500 */
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        brand: "8px",
      },
      fontFamily: {
        headline: ['Bebas Neue', 'cursive'],
        body: ['Inter', 'sans-serif'],
        cta: ['Poppins', 'sans-serif'],
        accent: ['Anton', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'brand': '0 4px 20px rgba(13, 13, 13, 0.15)',
        'brand-lg': '0 8px 40px rgba(13, 13, 13, 0.2)',
        'brand-xl': '0 20px 40px rgba(13, 13, 13, 0.3)',
      },
      animation: {
        'pulse-scale': 'pulse-scale 2s infinite',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'counter': 'counter 2s ease-out',
      },
      keyframes: {
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        slideInLeft: {
          from: { transform: 'translateX(-30px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          from: { transform: 'translateX(30px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInUp: {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        counter: {
          from: { transform: 'scale(0.8)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}