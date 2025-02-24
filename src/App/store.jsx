import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../Features/productsSlice";

const store = configureStore({
  reducer: { Products: productsSlice },
});

export default store;
