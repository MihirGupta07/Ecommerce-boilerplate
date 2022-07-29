// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    products: [],
    favourites: [],
    cartItems: [],
    currentProduct: "",
  },
  reducers: {
    handleAddToCart: (state, action) => {
      const item = state.products.find((prod) => prod.id === action.payload);
      const itemInCart = state.cartItems.find((item) =>
        item.id === action.payload ? true : false
      );
      console.log(itemInCart);
      return {
        ...state,
        cartItems: itemInCart
          ? state.cartItems.map((item) =>
              action.payload === item.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cartItems, { ...item, quantity: 1 }],
      };
    },
    handleRemoveFromCart: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    },
    handleAdjustQuantity: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    },

    handleFetchProducts: (state, action) => {
      state.products = action.payload;
    },

    handleCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },

    handleFetchFavourites: (state, action) => {
      state.favourites = action.payload;
    },
  },
});

export const {
  handleAddToCart,
  handleAdjustQuantity,
  handleRemoveFromCart,
  handleCurrentProduct,
  handleFetchFavourites,
  handleFetchProducts,
} = storeSlice.actions;

export default storeSlice.reducer;
