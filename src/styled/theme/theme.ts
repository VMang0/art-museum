import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    orange: {
      bright: '#F17900',
      light: '#E0A449',
    },
    white: {
      primary: '#FFFFFF',
      light: '#F9F9F9',
      lighter: '#F0F1F1',
      extraLight: '#FAFAFA',
    },
    blue: '#2C3144',
    grey: '#393939',
    gradient: {
      light: 'rgba(251, 215, 178, 0.3)',
      medium: 'rgba(57, 57, 57, 0.5)',
      lightest: 'rgba(57, 57, 57, 0.05)',
      main: 'linear-gradient(90deg, #343333 16.73%, #484848 58.63%, #282828 98.63%)',
    },
  },
  fonts: {
    main: 'Inter, sans-serif',
    secondary: 'Lexend Deca, sans-serif',
  },
  fontSizes: {
    s64: '4rem',
    s63: '3.938rem',
    s32: '2rem',
    s24: '1.5rem',
    s28: '1.75rem',
    s18: '1.125rem',
    s16: '1em',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  gaps: {
    g4: '0.25rem',
    g25: '1.563rem',
    g40: '2.5rem',
  },
  translates: {
    active: 'translateX(0)',
    notActive: 'translateX(100%)',
  },
  width: {
    full: '100%',
    fullVW: '100vw',
    main: '1280px',
    w160: '10rem',
    w60p: '60%',
    w50p: '50%',
  },
  height: {
    full: '100%',
    fullVH: '100vh',
  },
  padding: {
    p50: '3.125rem',
    p32: '2rem',
    p30: '1.875rem',
    p20: '1.25rem',
    p15: '0.938rem',
  },
};