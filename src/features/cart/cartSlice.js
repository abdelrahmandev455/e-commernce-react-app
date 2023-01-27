import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name:"cart",
  initialState:{
    data:[],
    totalQuantity:0,
    totalPrice:0
  },
  reducers:{
    addTo(state,action){
      let find = state.data.findIndex(product => product.id === action.payload.id)

      if(find !== -1){
        state.data[find].quantity += 1
        state.data[find].price += state.data[find].ActuallPrice
        state.totalQuantity += 1
        state.totalPrice += action.payload.price
      }else{
        let newCartItem = {
          id:action.payload.id,
          name:action.payload.name,
          price:action.payload.price,
          img:action.payload.img,
          quantity:1,
          ActuallPrice:action.payload.price
        }
        state.data.push(newCartItem)
        state.totalQuantity += 1
        state.totalPrice += action.payload.price
      }
    },
    increaseQua(state,action){
      let index = state.data.findIndex(product => product.id === action.payload.id)
      
      if(state.data[index].quantity <= 10){
        state.data[index].quantity += 1
        state.data[index].price += state.data[index].ActuallPrice
        state.totalQuantity += 1
        state.totalPrice += state.data[index].ActuallPrice
      }
    },
    decreaseQua(state,action){
      let index = state.data.findIndex(product => product.id === action.payload.id)
      
      if(state.data[index].quantity > 1){
        state.data[index].quantity -= 1
        state.data[index].price -= state.data[index].ActuallPrice
        state.totalQuantity -= 1
        state.totalPrice -= state.data[index].ActuallPrice
      }
    },
    deleteProduct(state,action){
      let index = state.data.findIndex(product => product.id === action.payload.id)
      
      let productQua = state.data[index].quantity
      let price = state.data[index].price
      
      state.data = state.data.filter(product => product.id !== action.payload.id)
      state.totalQuantity -= productQua
      state.totalPrice -= price
    },
    deleteAllProducts(state,action){
      state.data = []
      state.totalQuantity = 0
      state.totalPrice = 0
    }
  }
})

export const currentState = state => state.cart
export const {addTo,increaseQua,decreaseQua,deleteProduct,deleteAllProducts} = cartSlice.actions
export default cartSlice.reducer