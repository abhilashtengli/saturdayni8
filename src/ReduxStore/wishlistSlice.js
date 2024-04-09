import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
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

export const { addItem, removeItem, clearItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
