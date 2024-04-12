import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addWishlistItem: (state, action) => {
      const { item, userQuantity, userSize } = action.payload;
      const id = item.id;
      state.items = state.items.filter((item) => item.id !== id);
      const newItem = {
        ...item,
        userQuantity,
        userSize,
      };
      state.items.push(newItem);
    },

    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const productIndex = state.items.findIndex((item) => item.id === itemId);
      if (productIndex !== -1) {
        state.items[productIndex].userQuantity = quantity;
      }
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

export const {
  addWishlistItem,
  removeWishlistItem,
  clearItem,
  updateQuantity,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
