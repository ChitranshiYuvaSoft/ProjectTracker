import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

// {
//     name : "Ruhan",
//     userName : "ruhan_123",
//     email : "ruhan123@gmail.com",
//     password : "ruhan1234",
//     token : "123454765dgfh"
// }

const initialState = {
  user: null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: "Something Went Wrong!!",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // Register
    .addCase(register.pending , (state, action) => {
        state.isLoading = true,
        state.isError = false
    })
    .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false,
        state.isSuccess = true,
        state.user = action.payload
    })
    .addCase(register.rejected, (state, action) => {
        state.isLoading = false,
        state.isSuccess = false,
        state.isError = true,
        state.message = action.payload
    })

    // Login
    .addCase(login.pending , (state, action) => {
        state.isLoading = true,
        state.isError = false
    })
    .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false,
        state.isSuccess = true,
        state.user = action.payload
    })
    .addCase(login.rejected, (state, action) => {
        state.isLoading = false,
        state.isSuccess = false,
        state.isError = true,
        state.message = action.payload
    })
    .addCase(logOutUser.fulfilled , (state, action) => {
        state.user = null
        state.isLoading = false
        state.isError = false
        state.isSuccess = false
        state.message = ""
      })   
  },
});

export const register = createAsyncThunk("REGISTER/USER", async(formData) => {
  try {
    return await authService.registerUser(formData);
  } catch (error) {
    console.log(error.message);
  }
});

export const login = createAsyncThunk("LOGIN/USER", async(formData) => {
    try {
       return await authService.loginUser(formData);
    } catch (error) {
        console.log(error.message);
    }
})

export const logOutUser = createAsyncThunk("LOGOUT/USER", async() => {
    localStorage.setItem("user" , "")
  })
  
export default authSlice.reducer;
