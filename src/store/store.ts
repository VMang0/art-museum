import { configureStore } from '@reduxjs/toolkit';
import { artsApi } from './api/art-api';

export const store = configureStore({
  reducer: {
    [artsApi.reducerPath]: artsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(artsApi.middleware),
});
