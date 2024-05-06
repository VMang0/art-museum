import favoritesReducer from '@redux/slices/favoriteSlice';
import { configureStore } from '@reduxjs/toolkit';
import { artsApi } from './api/art-api';

export const store = configureStore({
  reducer: {
    [artsApi.reducerPath]: artsApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(artsApi.middleware),
});
