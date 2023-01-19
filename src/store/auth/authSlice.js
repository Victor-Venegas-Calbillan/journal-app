import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', // authenticated, not-authenticated, checking
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
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
  },
});

export const { login, checkingCredentials, logOut } = authSlice.actions;