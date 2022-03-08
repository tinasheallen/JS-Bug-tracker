import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"And Lion"})
            state.push({name:"Kerry Penn"})
        }
    }
})

export default slice.reducer;
export const{getUser} = slice.actions;