import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const fetchSignIn = createAsyncThunk("signIn/fetchSignIn", async (data) => {
  try {
    const response = await axios.post("https://dummyjson.com/auth/login", data);

    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
});

const initialState = {
  isAuth: false,
  userData: {},
  isLoading: false,
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchSignIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.userData = action.payload;
        localStorage.setItem("ALISHER", JSON.stringify(action.payload));
      })

      .addCase(fetchSignIn.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchSignIn.rejected, (state) => {
        state.isLoading = false;
      }),
});

const REQUESTS_SIGN_IN = {
  fetchSignIn,
};

export { signInSlice, REQUESTS_SIGN_IN };
