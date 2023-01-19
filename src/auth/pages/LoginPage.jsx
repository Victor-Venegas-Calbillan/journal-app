import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material';
import { Grid, TextField, Typography, Button, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { chekingAuthentication, startGoogleLogin } from '../../store/auth';

export const LoginPage = () => {
  const { status } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange  } = useForm({
    email: 'correo@correo.com',
    password: '123456',
  })

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password })

    dispatch( chekingAuthentication(email, password) )
  }

  const onGoogleLogin = () => {
    console.log('Google Login')

    dispatch( startGoogleLogin() )
  }

  return (
    <AuthLayout title="Login" >
       <form onSubmit={ onSubmit } >
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label='correo'
                type='email'
                placeholder='correo@correo.com'
                fullWidth
                name='email'
                onChange={ onInputChange }
                value={ email }
              />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label='Contraseña'
                type='Password'
                placeholder='contraseña'
                fullWidth
                name='password'
                onChange={ onInputChange }
                value={ password }
              />
            </Grid>
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button
                  disabled={ isAuthenticating }
                  variant='contained' 
                  fullWidth
                  type='submit'
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button
                  disabled={ isAuthenticating } 
                  variant='contained' 
                  fullWidth
                  onClick={ onGoogleLogin }
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>
                    Google
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="end"
            >
              <Link component={ RouterLink } color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  );
};
