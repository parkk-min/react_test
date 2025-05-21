import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        list: [],
    },
    reducers: {
        setList(state,action){
            state.list = action.payload;
        }

    }
});

export const { setList } = userSlice.actions;
export default userSlice;