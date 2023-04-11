import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
/* import { fetchCount } from './counterAPI'; */

export interface DataSlice {
  value: boolean;
  navCate: string;
  productId: number;
  showCart: boolean;
  showProduct: boolean;
  searchQuery: string;
}

const initialState: DataSlice = {
  value: false,
  navCate: '',
  productId: 0,
  showCart: false,
  showProduct: false,
  searchQuery: ''
};


export const DataSlice = createSlice({
  name: 'DataSlice',
  initialState,
  reducers: {
    showNav: (state) => {
      state.value = true;
    },
    hideNav: (state) => {
      state.value = false;
    },
    category: (state,action: PayloadAction<string>) => {
      state.navCate = action.payload
    },
    prodId: (state,action: PayloadAction<number>) => {
      state.productId = action.payload
    },
    showCartFunc:(state, action:PayloadAction<boolean>) =>{
      state.showCart = action.payload
    },
    showProductFunc:(state, action:PayloadAction<boolean>) =>{
      state.showProduct = action.payload
    },
    setQuery: (state,action:PayloadAction<string>) => {
      state.searchQuery = action.payload
    }
  },
});

export const { showNav, hideNav, category, prodId, showCartFunc, showProductFunc, setQuery } = DataSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default DataSlice.reducer;
