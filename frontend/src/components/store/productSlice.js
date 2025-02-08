import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[]
}

const authSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProducts : (state,action)=>{
            console.log(action.payload);
            
            state.items = action.payload
        },
        updateProdcuts : (state,action)=>{
            state.items.push(action.payload)
        }
    }
})
export const {addProducts,updateProdcuts} = authSlice.actions
export default authSlice.reducer