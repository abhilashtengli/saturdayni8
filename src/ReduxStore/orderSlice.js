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

      // Filter out items that already exist in state
      const newData = data.filter(
        (item) =>
          !state.items.some((existingItem) => existingItem.id === item.id)
      );

      // Concatenate unique items with existing items
      state.items = [...state.items, ...newData];
      state.totalPrice = totalPrice;
    },
  },
});

export const { addItems } = orderSlice.actions;
export default orderSlice.reducer;
