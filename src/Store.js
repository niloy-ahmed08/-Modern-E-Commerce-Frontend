import { configureStore } from '@reduxjs/toolkit'
import { ProductSlice } from './slice/ProductSlice'


export default configureStore({
  reducer: {
   products : ProductSlice.reducer
  }
})