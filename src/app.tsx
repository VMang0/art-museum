import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '@redux/store';
import { GlobalStyles } from '@styled/global';
import { theme } from '@styled/theme';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';

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
