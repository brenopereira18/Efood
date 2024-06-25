import { createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../../pages/Home";

type cartState = {
  items: Restaurant[];
};

const initialState: cartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
