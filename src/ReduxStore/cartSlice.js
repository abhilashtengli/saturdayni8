import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },

  reducers: {
    addItem: (state, action) => {
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

    updateCartQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const productIndex = state.items.findIndex((item) => item.id === itemId);
      if (productIndex !== -1) {
        state.items[productIndex].userQuantity = quantity;
      }
    },

    removeItem: (state, action) => {
      const itemId = action.payload.id;
      const removeId = state.items.find((item) => item.id === itemId);
      if (removeId) {
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },

    clearItem: (state) => {
      state.items = [];
    },

    setTotalProductPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearItem,
  updateCartQuantity,
  updatePrice,
  setTotalProductPrice,
} = cartSlice.actions;
export default cartSlice.reducer;
