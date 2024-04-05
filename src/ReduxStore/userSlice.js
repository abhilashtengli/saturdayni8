import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    gender: "male",
  },
  reducers: {
    addGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});
export const { addGender } = userSlice.actions;
export default userSlice.reducer;
