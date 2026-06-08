import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#111415',
          dim: '#111415',
          bright: '#373a3b',
          variant: '#323536',
        },
        'surface-container': {
          lowest: '#0c0f10',
          low: '#191c1d',
          DEFAULT: '#1d2021',
          high: '#282a2b',
          highest: '#323536',
        },
        'on-surface': {
          DEFAULT: '#e1e3e4',
          variant: '#c5c6ca',
        },
        primary: {
          DEFAULT: '#c6c6c9',
          container: '#0f1113',
          fixed: '#e2e2e5',
          'fixed-dim': '#c6c6c9',
        },
        'on-primary': {
          DEFAULT: '#2f3133',
          container: '#7b7d7f',
          fixed: '#1a1c1e',
          'fixed-variant': '#454749',
        },
        secondary: {
          DEFAULT: '#d3fbff',
          container: '#00eefc',
          fixed: '#7df4ff',
          'fixed-dim': '#00dbe9',
        },
        'on-secondary': {
          DEFAULT: '#00363a',
          container: '#00686f',
          fixed: '#002022',
          'fixed-variant': '#004f54',
        },
        tertiary: {
          DEFAULT: '#c1c7ce',
          container: '#0b1116',
          fixed: '#dde3eb',
          'fixed-dim': '#c1c7ce',
        },
        'on-tertiary': {
          DEFAULT: '#2b3137',
          container: '#777d84',
          fixed: '#161c22',
          'fixed-variant': '#41474e',
        },
        error: {
          DEFAULT: '#ffb4ab',
          container: '#93000a',
        },
        'on-error': {
          DEFAULT: '#690005',
          container: '#ffdad6',
        },
        outline: {
          DEFAULT: '#8f9194',
          variant: '#45474a',
        },
        background: '#111415',
        'on-background': '#e1e3e4',
        'metallic-charcoal': '#1A1D21',
        'blueprint-cyan': '#00F0FF',
        'structural-gray': '#ADB5BD',
        'wireframe-stroke': 'rgba(255, 255, 255, 0.1)',
        'inverse-surface': '#e1e3e4',
        'inverse-on-surface': '#2e3132',
        'inverse-primary': '#5d5e61',
        'surface-tint': '#c6c6c9',
      },
      fontFamily: {
        display: ['Hanken Grotesk', 'sans-serif'],
        headline: ['Hanken Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-lg': ['72px', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '700' }],
        'headline-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline-md': ['32px', { lineHeight: '1.3', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-caps': ['12px', { lineHeight: '1.0', letterSpacing: '0.1em', fontWeight: '500' }],
        'technical': ['14px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        'unit': '4px',
        'gutter': '24px',
        'margin': '48px',
        'container-max': '1440px',
      },
      borderRadius: {
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'scan-line': 'scan-line 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'scan-line': {
          '0%': { top: '-10%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '110%', opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
