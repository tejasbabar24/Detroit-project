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
        updateProdcuts : (state,action)=>{
            state.items.push(action.payload)
        }
    }
})
export const {addProducts,updateProdcuts} = productSlice.actions
export default productSlice.reducer