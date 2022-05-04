import {configureStore} from '@reduxjs/toolkit';
import favoriteSlice from "./features/favoriteSlice";


const store = configureStore({
    reducer: {
        favorite: favoriteSlice
    }
});


export default store;