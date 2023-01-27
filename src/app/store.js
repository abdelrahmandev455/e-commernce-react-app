import { configureStore } from '@reduxjs/toolkit';
import productSliceReducer from "../features/products/productSlice"
import cartSliceReducer from "../features/cart/cartSlice"

const store = configureStore({
  reducer: {
    product:productSliceReducer,
    cart:cartSliceReducer
  },
});

export default store