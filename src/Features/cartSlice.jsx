import { createSlice } from "@reduxjs/toolkit";
import { sumItems, sumPrice } from "../helpers/helper";
const initialState = {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  Checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.itemCounter = sumItems(state.selectedItems);
        state.total = sumPrice(state.selectedItems);
        state.Checkout = false;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      state.itemCounter = sumItems(state.selectedItems);
      state.total = sumPrice(state.selectedItems);
    },
    increase: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      state.itemCounter = sumItems(state.selectedItems);
      state.total = sumPrice(state.selectedItems);
    },
    decrease: (state, action) => {
      const decreaseIndex = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      state.total = sumPrice(state.selectedItems);
      state.itemCounter = sumItems(state.selectedItems);
    },
    Checkout: (state) => {
      state.selectedItems = [];
      state.itemCounter = 0;
      state.total = 0;
      state.Checkout = true;
    },
  },
});

export default cartSlice.reducer;

export const { addItem, increase, decrease, removeItem, Checkout } =
  cartSlice.actions;
