import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    mensProduct: [],
    womensProduct: [],
  },
  reducers: {
    addMensProduct: (state, action) => {
      state.mensProduct = action.payload;
    },
    addWomensProduct: (state, action) => {
      state.womensProduct = action.payload;
    },
  },
});

export const { addMensProduct, addWomensProduct } = productSlice.actions;
export default productSlice.reducer;
