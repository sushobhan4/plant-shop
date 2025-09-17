import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existing = state.items.find((item) => item.id === newItem.id);
      if (!existing) {
        state.items.push({ ...newItem, quantity: 1 });
        state.totalQuantity += 1;
        state.totalPrice += newItem.price;
      }
    },
    incrementItem(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity++;
        state.totalQuantity++;
        state.totalPrice += item.price;
      }
    },
    decrementItem(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity--;
        state.totalQuantity--;
        state.totalPrice -= item.price;
        if (item.quantity === 0) {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      }
    },
    removeFromCart(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
  },
});

export const { addToCart, incrementItem, decrementItem, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
