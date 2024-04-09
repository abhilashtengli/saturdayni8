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
      const newItem = {
        ...item,
        userQuantity,
        userSize,
      };
      state.items.push(newItem);
      state.totalprice += item.price;
    },
    addUserSize: (state, action) => {
      const id = action.payload.id;
      const s = action.payload.s;
      console.log(id, s);
      state.userDetails.id = id;
      state.userDetails.size = s;
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

export const { addItem, removeItem, clearItem, addUserSize } =
  cartSlice.actions;
export default cartSlice.reducer;
