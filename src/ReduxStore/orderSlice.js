import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItems: (state, action) => {
      const { totalPrice, data } = action.payload;

      state.items = [...state.items, ...data];
      state.totalPrice = totalPrice;
    },
  },
});

export const { addItems } = orderSlice.actions;
export default orderSlice.reducer;
