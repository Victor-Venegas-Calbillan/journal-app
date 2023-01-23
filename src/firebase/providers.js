import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { firebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async() => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;

    return{
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }

  } catch (error) {
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    }
  }
}

export const registerWithEmailPAssword = async ({email, password, displayName}) => {
  try {
    const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    const { uid, photoURL } = resp.user;

    await updateProfile( firebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL
    }
  
  } catch (error) {

    console.log(error.message)


    return {
      ok: false,
      errorMessage: error.message
    }
  }
} 

export const loginWithEmailPassword = async ({email, password}) => {
  try {
    const resp = await signInWithEmailAndPassword(firebaseAuth, email, password)
    const { uid, photoURL, displayName } = resp.user;

    return{
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }

  } catch (error) {

    
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}