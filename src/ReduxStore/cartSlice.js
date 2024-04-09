import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalprice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { item, userQuantity, userSize } = action.payload;
      const totalPrice = item.price * userQuantity;
      const id = item.id;
      state.items = state.items.filter((item) => item.id !== id);
      const newItem = {
        ...item,
        userQuantity,
        userSize,
        totalPrice,
      };
      state.items.push(newItem);
      state.totalprice += totalPrice;
    },

    removeItem: (state, action) => {
      const itemId = action.payload.id;
      const removeId = state.items.find((item) => item.id === itemId);
      if (removeId) {
        state.totalprice -= removeId.price;
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
    clearItem: (state) => {
      state.items = [];
      state.totalprice = 0;
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
