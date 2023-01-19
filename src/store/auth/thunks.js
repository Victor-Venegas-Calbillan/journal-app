import { checkingCredentials } from './';

export const chekingAuthentication = (email, password) =>{
  return async (dispatch, getState) => {
    dispatch(checkingCredentials());
  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    dispatch(checkingCredentials());
  }
}