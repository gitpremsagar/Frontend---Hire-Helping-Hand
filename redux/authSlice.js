import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    jwtToken: null,
    userid: null,
    firstName: null,
    lastName: null,
    isUserLoggedIn: false,
    isUserFreelancer: false,
  },
  reducers: {
    setJWTToken: (state, action) => {
      state.jwtToken = action.payload;
    },
    setUserId: (state, action) => {
      state.userid = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setIsUserLoggedIn: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
    setIsUserFreelancer: (state, action) => {
      state.isUserFreelancer = action.payload;
    },
  },
});

export const {
  setJWTToken,
  setFirstName,
  setLastName,
  setIsUserLoggedIn,
  setUserId,
  setIsUserFreelancer,
} = authSlice.actions;

export default authSlice.reducer;
