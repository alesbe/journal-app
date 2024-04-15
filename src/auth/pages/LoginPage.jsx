import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";
import { useMemo } from "react";

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  // Con useSelector, podemos acceder directamente al store. Lo usaremos para bloquear los botones mientras se esté realizando la autenticación.
  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(formData);

  // Si el status cambia, se va a obtener un nuevo valor. Si el status nunca cambia, no se volverá a calcular. El useMemo() "memoriza"
  const isAuthenticating = useMemo( () => status == "checking", [status] )

  const onSubmit = ( event ) => {
    event.preventDefault();

    dispatch(startLoginWithEmailPassword({ email, password }));
  }

  const onGoogleSignIn = () => {
    console.log("OnGoogleSignIn");
    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title = 'Login'>
      <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">
          <Grid container>
            <Grid item xs = { 12 } sx = {{ mt: 2 }}>
              <TextField
                label = "Correo"
                type = "email"
                placeholder = "example@email.com"
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item xs = { 12 } sx = {{ mt: 2 }}>
              <TextField
                label = "Contraseña"
                type = "password"
                placeholder = "Contraseña"
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid
              container
              display={ !!errorMessage ? '': 'none' }
              sx={{ mt: 1 }}>
              <Grid
                item
                xs = { 12 }>
                <Alert severity="error">{ errorMessage }</Alert>
              </Grid>
            </Grid>

            <Grid container spacing={ 2 } sx = {{ mb: 2, mt: 1 }}>
              <Grid item xs = { 12 } sm = { 6 }>
                <Button
                  disabled={ isAuthenticating }
                  type="submit"
                  variant = 'contained'
                  fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs = { 12 } sm = { 6 }>
                <Button
                  disabled={ isAuthenticating }
                  variant = 'contained'
                  fullWidth
                  onClick={ onGoogleSignIn }>
                  <Google/>
                  <Typography sx = {{ ml:1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction = 'row' justifyContent = 'end'>
            <Link component = { RouterLink } color = 'inherit' to = "/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </form>
    </AuthLayout>
  )
}
