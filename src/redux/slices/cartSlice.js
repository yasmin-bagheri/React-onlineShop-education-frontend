import {createSlice } from '@reduxjs/toolkit';




// Function to load the cart state from localStorage
const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  };
  
  // Function to save the cart state to localStorage
  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };
  
  const initialState = {
    items: loadCartFromLocalStorage(), // Load cart items from localStorage initially
  };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state.items);
    },
    removeItemFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      if (itemIndex >= 0) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
      saveCartToLocalStorage(state.items);
    },
    clearCart: (state) => {
        state.items = [];  // Empty the cart
        saveCartToLocalStorage(state.items); // Save the empty cart to localStorage
      },
  },
});

// Selector to calculate total price
export const selectTotalPrice = state => 
    state.cart.items.reduce((total, item) => total + parseInt((item.price).split(",").join("")) * item.quantity, 0);

// Selector to calculate total quantity of items in the basket
export const selectTotalQuantity = state =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0);

// Selector to get the quantity of a single product by id
export const selectProductQuantity = (state, productId) => {
    const product = state.cart.items.find(item => item.id === productId);
    return product ? product.quantity : 0;  // If the product is not in the cart, return 0
  };
  

export const { addItemToCart, removeItemFromCart ,clearCart } = cartSlice.actions;
export default cartSlice.reducer
