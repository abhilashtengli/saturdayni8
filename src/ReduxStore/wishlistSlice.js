import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addWishlistItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.items.push(action.payload);
    },
    removeWishlistItem: (state, action) => {
      const itemId = action.payload.id;
      console.log(itemId);
      state.items = state.items.filter((item) => item.id !== itemId);
    },

    clearItem: (state, action) => {
      state.items = [];
    },
  },
});

export const { addWishlistItem, removeWishlistItem, clearItem } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
