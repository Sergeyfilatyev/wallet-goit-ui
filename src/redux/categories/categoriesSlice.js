import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCategories } from "./categories-operations";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
    },

    extraReducers: (builder) => 
    builder
    .addCase(fetchAllCategories.fulfilled, (state, {payload}) => {
        state.categories = payload.data;
    })
});

export default categoriesSlice.reducer;