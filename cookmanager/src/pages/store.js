import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "../pages/orderSlice";

const store = configureStore({
    reducer: {
        order: orderSlice.reducer,
    }
});

export default store;