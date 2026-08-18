import { createSlice } from '@reduxjs/toolkit'
import { jsx } from 'react/jsx-runtime'

export const ProductSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
    cart :localStorage.getItem('CartKey') ? JSON.parse(localStorage.getItem('CartKey')):[],
    heart : localStorage.getItem('heartkey') ? JSON.parse(localStorage.getItem('heartkey')):[]
   
   


  },
  reducers: {
    SetReducer : (state,action) => {

           state.value = action.payload
    },

     CartReducer : (state,action) => {
      
      let axits = state.cart.find((item)=>item.id == action.payload.id)
           if (!axits) {   
             state.cart = [...state.cart,action.payload]
             localStorage.setItem('CartKey',JSON.stringify(state.cart))
           }
       
    },


    
     removeReducer : (state,action) => {
      
      state.cart = state.cart.filter((item)=>item.id !== action.payload)
            
             localStorage.setItem('CartKey',JSON.stringify(state.cart))
           
    },


    heartReducer : (state,action)=>{
             let heartaxits = state.heart.find((item)=>item.id ==  action.payload.id)
             if (!heartaxits) {
              
               state.heart = [...state.heart,action.payload]
               localStorage.setItem('heartkey', JSON.stringify(state.heart))
             }

    },


    wishremoveReducer : (state,action) => {
      
      state.heart = state.heart.filter((item)=>item.id !== action.payload)
            
             localStorage.setItem('CartKey',JSON.stringify(state.heart))
           
    },



   
   
  }
})

// Action creators are generated for each case reducer function
export const { SetReducer,CartReducer,removeReducer,heartReducer,wishremoveReducer} = ProductSlice.actions

export default ProductSlice.reducer