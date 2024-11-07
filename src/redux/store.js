import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";

export const Store= configureStore({
    reducer: {
        theme: themeSlice,
        auth:authSlice,
        cart:cartSlice
    }
})