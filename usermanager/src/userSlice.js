import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        list: [],
        list2: [],
        addlist: []
    },
    reducers: {
        setList(state, action) {
            state.list = action.payload;
        },
        buyList(state, action) {
            state.list2 = action.payload;
        },
        addList(state, action) {
            state.addlist.push(action.payload);
        }

    }
});

export const { setList, buyList, addList } = userSlice.actions;
export default userSlice;