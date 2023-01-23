import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, TextField, Typography, Link, Alert } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startRegisterUserWithEmailPassword } from '../../store/auth';
import { useMemo } from 'react';

const formData = {
  displayName: '',
  email: '',
  password: '',
};

const formValidation = {
  email: [(value) => value.includes('@'), 'el correo debe tener un @.'],
  password: [(value) => value.length > 5, 'la contraseña debe tener mas de 5 caracteres.'],
  displayName: [(value) => value.length > 5, 'el nombre debe tener mas de 5 caracteres.'],
}

export const RegisterPage = () => {
  const dispatach = useDispatch();

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] )

  const [formSubmitted, setFormSubmitted] = useState(false)

  const {
    displayName,
    email,
    password,
    onInputChange,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
    fromValues
  } = useForm(formData, formValidation);


  const onSubmit = ( e ) => {
    e.preventDefault();
    setFormSubmitted(true);

    if(!isFormValid) return;

    console.log(errorMessage)

    dispatach(startRegisterUserWithEmailPassword(fromValues));
  }

  return (
    <AuthLayout title='Register'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label='Nombre completo'
              type='text'
              fullWidth
              placeholder='Tu nombre completo'
              name='displayName'
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              fullWidth
              placeholder='correo@correo.com'
              name='email'
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type='Password'
              fullWidth
              placeholder='contraseña'
              name='password'
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
            />
          </Grid>
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid 
              item 
              xs={ 12 }
              display={ !!errorMessage ? '' : 'none'} 
            >
              <Alert severity="error" >
                { errorMessage }
              </Alert>
            </Grid>
            <Grid item xs={ 12 }>
              <Button 
                variant='contained' 
                fullWidth
                type='submit'
                disabled={ isCheckingAuthentication }
              >
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>
              ¿Ya tienes cuenta?
            </Typography>
            <Link
              component={RouterLink}
              color='inherit'
              to='/auth/login'
            >
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
