import { loginWithGoogle, registerWithEmailPAssword } from '../../firebase/providers';
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

export const startRegisterUserWithEmailPassword = ({ email, password, displayName }) => {
  return  async (dispatch, getState) => {
    dispatch( checkingCredentials() );

    const { ok, uid, photoURL, errorMessage } = await registerWithEmailPAssword({ email, password, displayName });

    if( !ok ) return dispatch( logOut({ errorMessage }) );

    dispatch( login({ uid, displayName, email, photoURL }) );
  }
}