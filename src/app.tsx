import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from '@styled/global';
import { theme } from '@styled/theme';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
);
