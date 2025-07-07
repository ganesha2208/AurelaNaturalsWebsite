import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.jsx";

// Use the reducer property from the cartSlice
export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
