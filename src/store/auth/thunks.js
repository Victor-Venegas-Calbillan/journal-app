import { loginWithGoogle } from '../../firebase/providers';
import { checkingCredentials } from './';

export const chekingAuthentication = (email, password) =>{
  return async (dispatch, getState) => {
    dispatch(checkingCredentials());
  }
}

export const startGoogleLogin = () => {
  return async(dispatch) => {
    dispatch(checkingCredentials());
    const result = await loginWithGoogle();

  }
}