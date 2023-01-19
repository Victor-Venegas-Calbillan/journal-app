import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // authenticated, not-authenticated
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {
      
    },
    logOut: (state, action) => {

    },
    checkingCredentials: (state, action) => {
    },
  },
});

export const { login, checkingCredentials, logOut } = authSlice.actions;