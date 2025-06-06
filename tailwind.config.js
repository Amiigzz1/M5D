import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./app/Http/Livewire/**/*.php",
  ],
  theme: {
    extend: {
      textDirection: {
        rtl: 'rtl',
        ltr: 'ltr',
      },
      fontFamily: {
        sans: ['Tajawal', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#f8fafc',
          // Add your color palette
          900: '#0f172a',
        }
      }
    },
  },
  plugins: [
    forms,
    require('tailwindcss-rtl'),
  ],
}
