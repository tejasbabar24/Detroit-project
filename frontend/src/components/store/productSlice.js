import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[]
}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProducts : (state,action)=>{   
            state.items = action.payload
        },
        removeProduct : (state,action)=>{
            state.items = state.items.filter((product)=> product._id !==action.payload)
        }
    }
})
export const {addProducts,removeProduct} = productSlice.actions
export default productSlice.reducer