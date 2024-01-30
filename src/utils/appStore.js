import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "../utils/cartSlice"

const appStore = configureStore({
    reducer:{
        cart:cartSlice.reducer
    }
})

export default appStore