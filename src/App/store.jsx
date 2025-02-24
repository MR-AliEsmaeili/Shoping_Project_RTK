import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../Features/productsSlice";
import cartSlice from "../Features/cartSlice";
const store = configureStore({
  reducer: { Products: productsSlice, Cart: cartSlice },
});

export default store;
