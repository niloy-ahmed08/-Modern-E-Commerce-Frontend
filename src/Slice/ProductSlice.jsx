import { createSlice } from '@reduxjs/toolkit'
import { jsx } from 'react/jsx-runtime'

export const ProductSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
    cart : localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) :[],
    newvalue:[],
    addtocart: localStorage.getItem('Carts') ? JSON.parse(localStorage.getItem('Carts')):[]


  },
  reducers: {
    ProductReducer : (state,action) => {
           state.value = action.payload
    },

     CartReducer : (state,action) => {
           state.cart = [...state.cart,action.payload]
           localStorage.setItem('Cart',JSON.stringify(state.cart))
    },

    
     newReducer : (state,action) => {
           state.newvalue = action.payload
           
    },

      addtocartReducer : (state,action) => {
           state.addtocart = [...state.addtocart,action.payload]
           localStorage.setItem('Carts',JSON.stringify(state.addtocart))
           
    },
   
   

   
   
  }
})

// Action creators are generated for each case reducer function
export const { ProductReducer,CartReducer,newReducer,addtocartReducer} = ProductSlice.actions

export default ProductSlice.reducer