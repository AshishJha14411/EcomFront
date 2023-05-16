import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { useGetProductsAllQuery } from "./ApiQueries";
import { productsData, CartState } from './type';

const initialState: CartState = {
  products: [],
  total: 0,
};
/* eslint-disable */
export const CartStates = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<productsData>) => {
      
      const itemIndex = state.products.findIndex((item) => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.products[itemIndex].quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const itemIndex = state.products.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        state.products[itemIndex].quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const itemIndex = state.products.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1 && state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.products.filter(
        (item) => item.id !== action.payload
      );
      state.products = removeItem;
    },
    clearCart: (state) => {
      const removeItem = state.products.filter((item) => item.id === 0);
      state.products = removeItem;
    },
  },
});

export const {
  addToCart,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = CartStates.actions;

export default CartStates.reducer;
/* eslint-disable */
