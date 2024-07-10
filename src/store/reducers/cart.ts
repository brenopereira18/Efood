import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type cartState = {
  items: menuItem[];
  isOpen: boolean;
};

const initialState: cartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    CartOpen: (state) => {
      state.isOpen = true;
    },
    CartClose: (state) => {
      state.isOpen = false;
    },
    add: (state, action: PayloadAction<menuItem>) => {
      const food = state.items.find((item) => item.id === action.payload.id);

      if (!food) {
        state.items.push(action.payload);
      } else {
        alert("Este produto já está no carrinho");
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { CartOpen, CartClose, add, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
