import { createSlice } from '@reduxjs/toolkit';


const favoritSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],

    },
    reducers: {
        addFavorite: (state, action) => {
            const { id } = action.payload
            if (state.favorites.find(item => item.id === id)) {
                return
            }
            else {

                state.favorites.push(action.payload);
                localStorage.setItem('favorites', JSON.stringify(state.favorites));
            }

        },
        deleteFavorite: (state, action) => {
            const { itemId } = action.payload
            state.favorites = state.favorites.filter(item => item.id !== itemId)
            localStorage.setItem('favorites', JSON.stringify(state.favorites));

        }
    },

});

export const { addFavorite, deleteFavorite } = favoritSlice.actions;
export const selectFavorites = state => state.favorite.favorites;

export default favoritSlice.reducer;