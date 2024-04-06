import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import selectedProductSlice from "./selectedProductSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    selectedProduct: selectedProductSlice,
  },
});

export default store;
