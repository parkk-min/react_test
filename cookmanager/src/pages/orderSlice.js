import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderList: [],
    bookInfo: null,
  },
  reducers: {
    setOrderList(state, action) {
      state.orderList = action.payload;
    },
    setBookInfo(state, action) {
      state.bookInfo = action.payload;
    },
  },
});

export const { setOrderList, setBookInfo } = orderSlice.actions;
export default orderSlice;
