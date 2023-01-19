import { loginWithGoogle } from '../../firebase/providers';
import { checkingCredentials, login, logOut } from './';

export const chekingAuthentication = (email, password) =>{
  return async (dispatch, getState) => {
    dispatch(checkingCredentials());
  }
}

export const startGoogleLogin = () => {
  return async(dispatch) => {
    dispatch(checkingCredentials());
    const result = await loginWithGoogle();

    if( !result.ok ) return dispatch(logOut(result));

    dispatch(login(result));
  }
}