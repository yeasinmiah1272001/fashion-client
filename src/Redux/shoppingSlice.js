import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  userInfo: null,
};

export const counterSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incressQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },

    decressQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      }
    },

    singleDelete: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, incressQuantity, decressQuantity, singleDelete } =
  counterSlice.actions;

export default counterSlice.reducer;
