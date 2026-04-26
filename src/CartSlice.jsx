import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      if (!state.items[product.id]) {
        state.items[product.id] = { ...product, quantity: 1 };
      }
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity -= 1;
        if (state.items[id].quantity <= 0) {
          delete state.items[id];
        }
      }
    },
    removeFromCart: (state, action) => {
      delete state.items[action.payload];
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export const selectCartItems = (state) => Object.values(state.cart.items);

export const selectCartCount = (state) =>
  Object.values(state.cart.items).reduce((total, item) => total + item.quantity, 0);

export const selectCartTotal = (state) =>
  Object.values(state.cart.items).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export default cartSlice.reducer;

