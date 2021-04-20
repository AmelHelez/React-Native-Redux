import { createSlice, configureStore } from "@reduxjs/toolkit";

const namesSlice = createSlice({
    name: "myitems",
    initialState: {
        items: [
            {id: 1, name: "apple", color: "green" },
            {id: 2, name: "watermelon", color: "red" },
            {id: 3, name: "banana", color: "yellow" },
        ],
        cart: [],
    },
    reducers: {
        addItem: (state, action) => {
          return {
              ...state,
              items: [...state.items, action.payload]
          };
        },
        removeItem: (state, action) => {
            return {
                items: [...state.items.filter((item) => item.id !== action.payload.id)],
            };
        },
        addToCart: (state, action) => {
            return {
                ...state,
                cart: [...state.cart, ...state.items.filter((item) => item.id === action.payload.id)],
            };
        },
        removeFromCart: (state, action) => {
            return {
                cart: [...state.cart.filter((item) => item.id !== action.payload.id)]
            };
        },
        clearAll: (state) => {
            return {
                ...state,
                cart: [],
            };
        }
    }
});


export const { addItem, removeItem, addToCart, removeFromCart, clearAll } = namesSlice.actions;

export const store = configureStore({
    reducer: {
        items: namesSlice.reducer,
        cart: namesSlice.reducer,
    },
});