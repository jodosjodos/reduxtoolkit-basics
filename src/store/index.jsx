import {configureStore} from "@reduxjs/toolkit"
import { authSlice } from "./authSlice"
import { cartSlice } from "./cart-slice"
import { uiSlice } from "./uiSlice"
export const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        cart:cartSlice.reducer,
        ui:uiSlice.reducer
    }
})