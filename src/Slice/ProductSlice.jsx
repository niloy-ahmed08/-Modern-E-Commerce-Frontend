import { createSlice } from '@reduxjs/toolkit'
import { jsx } from 'react/jsx-runtime'

export const ProductSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
    cart : localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) :[],
  
   


  },
  reducers: {
    SetReducer : (state,action) => {
           state.value = action.payload
    },

     CartReducer : (state,action) => {
           state.cart = [...state.cart,action.payload]
           localStorage.setItem('Cart',JSON.stringify(state.cart))
    },


   
   
  }
})

// Action creators are generated for each case reducer function
export const { SetReducer,CartReducer,} = ProductSlice.actions

export default ProductSlice.reducer