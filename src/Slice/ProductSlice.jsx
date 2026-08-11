import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
    cart : localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) :[],
    newvalue:[]


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
   

   
   
  }
})

// Action creators are generated for each case reducer function
export const { ProductReducer,CartReducer,newReducer} = ProductSlice.actions

export default ProductSlice.reducer