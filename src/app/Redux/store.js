// import { configureStore } from "@reduxjs/toolkit";
// import cartSliceReducer from "./cartSlice";
import cartSliceReducer from "./slices/cartSlice";

import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
    },
    devTools: process.env.NODE_ENV !== 'production'
});