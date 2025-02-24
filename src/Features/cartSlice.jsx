import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: cart,
  initialState,
  reducers,
});
