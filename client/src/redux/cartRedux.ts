import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '../pages/product/data';

interface ICartSlicePayload {
  product: IProduct;
}

export interface ICartSliceState {
  products: IProduct[];
  quantity: number;
  total: number;
}

const initialState: ICartSliceState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ICartSlicePayload>) => {
      state.quantity += 1;
      state.products.push(action.payload.product);
      state.total += action.payload.product.price;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
