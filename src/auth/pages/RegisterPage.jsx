import { Link as RouterLink } from 'react-router-dom'
import {
  Button,
  Grid,
  TextField,
  Typography,
  Link
} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label='Nombre completo' 
              type='email' 
              fullWidth
              placeholder='Tu nombre completo'
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label='Correo' 
              type='email' 
              fullWidth
              placeholder='correo@correo.com'
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type='Password'
              fullWidth
              placeholder='contraseña'
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Repiter contraseña'
              type='Password'
              fullWidth
              placeholder='confirmar contraseña'
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr:1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={ RouterLink } color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
