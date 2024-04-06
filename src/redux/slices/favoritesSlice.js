import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteData: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const { id } = action.payload;

      const existingFav = state.favoriteData.find((item) => item.id === id);
      if (!existingFav) {
        state.favoriteData.push(action.payload);
      }
    },
    removeFromFavorite: (state, action) => {
      const favoriteIdToRemove = action.payload;
      state.favoriteData = state.favoriteData.filter(
        (item) => item.id !== favoriteIdToRemove
      );
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
