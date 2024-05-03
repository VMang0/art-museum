import InterBold from '@assets/fonts/inter/Inter-Bold.ttf';
import InterMedium from '@assets/fonts/inter/Inter-Medium.ttf';
import InterRegular from '@assets/fonts/inter/Inter-Regular.ttf';
import LexendDecaBold from '@assets/fonts/lexend-deca/LexendDeca-Bold.ttf';
import LexendDecaLight from '@assets/fonts/lexend-deca/LexendDeca-Light.ttf';
import LexendDecaMedium from '@assets/fonts/lexend-deca/LexendDeca-Medium.ttf';
import LexendDecaRegular from '@assets/fonts/lexend-deca/LexendDeca-Regular.ttf';
import LexendDecaSemiBold from '@assets/fonts/lexend-deca/LexendDeca-SemiBold.ttf';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-display: swap;
    src: url(${InterRegular}) format('ttf');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-display: swap;
    src: url(${InterMedium}) format('ttf');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-display: swap;
    src: url(${InterBold}) format('ttf');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-display: swap;
    src: url(${LexendDecaRegular}) format('ttf');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-display: swap;
    src: url(${LexendDecaBold}) format('ttf');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-display: swap;
    src: url(${LexendDecaMedium}) format('ttf');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-display: swap;
    src: url(${LexendDecaLight}) format('ttf');
    font-weight: 300;
  }
  @font-face {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-display: swap;
    src: url(${LexendDecaSemiBold}) format('ttf');
    font-weight: 600;
  }
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    color: ${({ theme }) => theme.colors.grey};
    font-family: ${({ theme }) => `${theme.fonts.main}, ${theme.fonts.secondary}, sans-serif`};
    background-color: ${({ theme }) => theme.colors.white.extraLight};
  }
  #root {
    min-height: 100vh;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  figure,
  blockquote,
  dl,
  dd {
    padding: 0;
    margin: 0;
  }
  ul,
  li,
  dl {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    display: inline-block;
    &:hover {
      text-decoration: none;
    }
  }
`;
