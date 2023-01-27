import {createSlice} from "@reduxjs/toolkit"
import data from "./Data.js"

const productSlice = createSlice({
  name:"product",
  initialState:data,
  reducers:{}
})

export const currentState = state => state.product.data
export default productSlice.reducer