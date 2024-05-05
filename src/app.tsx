import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from '@styled/global';
import { theme } from '@styled/theme';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';
import { store } from './store/store';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
