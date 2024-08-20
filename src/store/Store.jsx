import { configureStore } from '@reduxjs/toolkit'
import SliceReducer from './slices/Slice1'

export const store = configureStore({
  reducer: {
    cart:SliceReducer
  },
})