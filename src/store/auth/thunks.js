import { loginWithGoogle, registerWithEmailPAssword, loginWithEmailPassword } from '../../firebase/providers';
import { checkingCredentials, login, logOut } from './';

export const chekingAuthentication = (email, password) =>{
  return async (dispatch) => {
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
  return  async (dispatch) => {
    dispatch( checkingCredentials() );

    const resp = await registerWithEmailPAssword({ email, password, displayName });

    if( !resp.ok ) return dispatch( logOut( resp ) );

    dispatch( login( resp ) );
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch( checkingCredentials() );

    const resp = await loginWithEmailPassword({ email, password });


    if( !resp.ok ) return dispatch( logOut( resp ) );

    dispatch( login( resp ) );
  }
}