import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import selectedProductSlice from "./selectedProductSlice";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    selectedProduct: selectedProductSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
    order : orderSlice,
  },
});

export default store;
