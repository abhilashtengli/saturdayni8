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

    updateCartQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const productIndex = state.items.findIndex((item) => item.id === itemId);
      if (productIndex !== -1) {
        state.items[productIndex].userQuantity = quantity;
      }
    },

    updatePrice: (state, action) => {
      const { itemId, val, itemPrice } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.price += val * itemPrice;
        state.totalprice += val * itemPrice;
      }
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

export const {
  addItem,
  removeItem,
  clearItem,
  updateCartQuantity,
  updatePrice,
} = cartSlice.actions;
export default cartSlice.reducer;
