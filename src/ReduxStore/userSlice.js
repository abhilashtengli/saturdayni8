import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    gender: "male",
    recentSearch: [],
    products: [
      "shirt",
      "jacket",
      "tshirt",
      "pant",
      "jeans",
      "trouser",
      "suit",
      "shorts",
    ],
  },
  reducers: {
    addGender: (state, action) => {
      state.gender = action.payload;
    },
    addrecentSearch: (state, action) => {
      const keyword = action.payload.toLowerCase();
      // Check if the keyword is not already in recentSearch
      if (!state.recentSearch.includes(keyword)) {
        state.products.forEach((product) => {
          if (
            product.toLowerCase().includes(keyword.toLowerCase().slice(0, 2))
          ) {
            state.recentSearch.push(product);
          }
        });
      }
    },
  },
});
export const { addGender, addrecentSearch } = userSlice.actions;
export default userSlice.reducer;
