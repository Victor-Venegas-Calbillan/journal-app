import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { firebaseAuth } from "../firebase/config"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { login, logOut } from "../store/auth"
import { ChekingAuth } from "../ui"

export const AppRouter = () => {

  const { status } = useSelector( state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged( firebaseAuth, async (user) => {
      if (!user) return dispatch(logOut);

      const {uid, email, displayName, photoURL } = user

      dispatch ( login({ uid, email, displayName, photoURL }) )
    } );
    
  }, [])
  

  if( status === 'checking' ) {
    return <ChekingAuth />
  }
  
  return (
    <Routes>
      {
        (status === 'authenticated')
        ? <Route path="/*" element={<JournalRoutes />} />
        : <Route path="/auth/*" element={<AuthRoutes />} />
      }

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
