import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import selectedProductSlice from "./selectedProductSlice";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    selectedProduct: selectedProductSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
  },
});

export default store;
