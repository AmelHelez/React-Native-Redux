import { createSlice, configureStore } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
    name: "items",
    initialState: {
        fruits: [
            {id: 1, name: "apple", color: "green"},
            {id: 2, name: "banana", color: "yellow"},
            {id: 3, name: "strawberry", color: "red"},
        ]
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
               fruits: state.fruits.filter((item) => item.id !== action.payload.itemId)
            };
        }
    }
}); 

export const { addItem, removeItem } = itemsSlice.actions;

export const store = configureStore({
    reducer: {
        items: itemsSlice.reducer,
    }
});