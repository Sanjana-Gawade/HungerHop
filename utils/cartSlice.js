import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.cartItem.push(action.payload);
    },
    removeAllItems: (state) => {
      state.cartItem = [];
    },
    updateCartItems: (state, action) => {
      state.cartItem = state.cartItem.filter((item) => item.info.id !== action.payload);
    },
  },
});

export const { addItems, removeAllItems, updateCartItems } = cartSlice.actions;
export default cartSlice.reducer;
