import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch } from "react-redux";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'alvaro@gmail.com',
    password: '1234'
  });

  const onSubmit = ( event ) => {
    event.preventDefault();

    console.log({ email, password });
    dispatch( checkingAuthentication() );
  }

  const onGoogleSignIn = () => {
    console.log("OnGoogleSignIn");
    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title = 'Login'>
      <form onSubmit={ onSubmit }>
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

            <Grid container spacing={ 2 } sx = {{ mb: 2, mt: 1 }}>
              <Grid item xs = { 12 } sm = { 6 }>
                <Button type="submit" variant = 'contained' fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs = { 12 } sm = { 6 }>
                <Button
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
