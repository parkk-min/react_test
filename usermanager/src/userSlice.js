import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        setlist: [],
        buylist: [],
        addlist: [],
        addbuy: []
    },
    reducers: {
        setList(state, action) {
            state.setlist = action.payload;
        },
        buyList(state, action) {
            state.buylist = action.payload;
        },
        addList(state, action) {
            state.addlist.push(action.payload);
        },
        addbuy(state, action) {
            state.addbuy.push(action.payload);
        }

    }
});

export const { setList, buyList, addList, addbuy } = userSlice.actions;
export default userSlice;