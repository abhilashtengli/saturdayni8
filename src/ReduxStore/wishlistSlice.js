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
    removeItem: (state, action) => {
      const itemId = action.payload.id;
      state.items.filter((item) => item.id !== itemId);
    },
    clearItem: (state, action) => {
      state.items = [];
    },
  },
});

export const { addWishlistItem, removeItem, clearItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
