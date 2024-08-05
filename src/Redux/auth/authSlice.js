import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    isSuccess : false,
    isLoading : false,
    isError : false,
    message : ""
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {},
    extraReducers : builder => {}
});

export default authSlice.reducer;