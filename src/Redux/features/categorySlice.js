import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllCategory = createAsyncThunk("fetch/categry", async () => {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
    return response.data;
});




const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [fetchAllCategory.pending]: (state) => {
            state.loading = true;
        },
        [fetchAllCategory.fulfilled]: (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        },
        [fetchAllCategory.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }

})

export const categorySelect = (state) => state.category

export default categorySlice.reducer;