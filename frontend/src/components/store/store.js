import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice.js'
import productSlice from './productSlice.js'
const store = configureStore({
    reducer : {
        auth : authSlice,
        product : productSlice
    }
})

export default store