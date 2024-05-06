import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FavoritesType = {
  favorites: number[];
};

type RootState = {
  favorites: FavoritesType;
};

const favoritesData = localStorage.getItem('favorites');
let favorites: number[] = [];

if (favoritesData) {
  favorites = JSON.parse(favoritesData) as number[];
}

const initialState: FavoritesType = {
  favorites: favorites,
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    actionFavorite(state, action: PayloadAction<number>) {
      const favorite = action.payload;
      if (state.favorites.includes(favorite)) {
        state.favorites = state.favorites.filter((item: number) => item !== favorite);
      } else {
        state.favorites.push(favorite);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const favoritesSelector = (state: RootState) => state.favorites.favorites;

export const { actionFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
