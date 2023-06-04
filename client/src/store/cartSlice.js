import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    myCart: [],
  },
  reducers: {
    addItem: (state, action) => void(state.myCart.push(action.payload)),
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
