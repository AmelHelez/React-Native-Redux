import { createSlice, configureStore } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
    name: "items",
    initialState: {
        fruits: [
            {id: 1, name: "apple", color: "green"},
            {id: 2, name: "banana", color: "yellow"},
            {id: 3, name: "strawberry", color: "red"},
        ],
        cart: [],
    },
    reducers: {
        addItem: (state, action) => {
            return {
                ...state,
                fruits: [...state.fruits, action.payload],
            };
        },
        removeItem: (state, action) => {
            return {
               fruits: [...state.fruits.filter((item) => item.id !== action.payload.itemId)],
            };
        },
        addToCart: (state, action) => {
            return {
                ...state,
                cart: [
                    ...state.cart,
                    ...state.fruits.filter((item) => item.id === action.payload.itemId)
                ],
            };
        },
        removeFromCart: (state, action) => {
         return {
             cart:  [...state.cart.filter((item) => item.id !== action.payload.id)]
         };
        },
        clearCart: (state) => {
            return {
                ...state,
                cart: [],
            }
        }
    }
}); 

export const { addItem, removeItem, addToCart, removeFromCart, clearCart } = itemsSlice.actions;

export const store = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        cart: itemsSlice.reducer,
    }
});