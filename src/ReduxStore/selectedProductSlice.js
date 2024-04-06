import { createSlice } from "@reduxjs/toolkit";

const selectedProductSlice = createSlice({
  name: "selectedProduct",
  initialState: {
    productType: "",
  },
  reducers: {
    addProductType: (state, action) => {
      state.productType = action.payload;
    },
  },
});

export const { addProductType } = selectedProductSlice.actions;
export default selectedProductSlice.reducer;
