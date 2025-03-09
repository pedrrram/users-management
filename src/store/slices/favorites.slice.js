import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      // check if user exists in favorites
      const exists = state.favorites.find(
        (favorite) => favorite.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload.id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

// selectors
export const selectFavorites = (state) => state.favorites.favorites;
export const selectIsFavorite = (state, userId) =>
  state.favorites.favorites.some((fav) => fav.id === userId);

export default favoritesSlice.reducer;
