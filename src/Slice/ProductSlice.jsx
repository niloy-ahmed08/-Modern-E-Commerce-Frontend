import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
    cart:[]
  },
  reducers: {
    ProductReducer : (state,action) => {
           state.value = action.payload
    },
      cartReducer : (state,action) => {
           state.cart = [...state.cart,action.payload]
    },
   
  }
})

// Action creators are generated for each case reducer function
export const { ProductReducer,cartReducer } = ProductSlice.actions

export default ProductSlice.reducer