import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { useGetProductsAllQuery } from './ApiQueries';
import { productsData,CartState } from './type';


const initialState: CartState = {
  products: [],
  total: 0,
};
/* eslint-disable */
export const CartStates = createSlice({
    name: 'cartData',
    initialState,
    reducers: {
        addToCart: (state,action: PayloadAction<CartState>) => {
          const existingItem = state.products.find((item) => item.id === action.payload.id)
          if(existingItem){
            existingItem.quantity++
          }else{
            state.products.push({...action.payload, quantity:1})
          }
          console.log(current(state.products))
        },
        incrementQuantity: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload);
            item.quantity++;
          },
          decrementQuantity: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity--;
            }
          },
          removeItem: (state, action) => {
            const removeItem = state.products.filter((item) => item.id !== action.payload);
            state.products = removeItem;
          },
          clearCart: (state) => {
            const removeItem = state.products.filter((item) => item.id === 0)
            state.products = removeItem
          }
        },
    
})

export const { addToCart, removeItem, incrementQuantity, decrementQuantity, clearCart } = CartStates.actions;

export default CartStates.reducer;
/* eslint-disable */