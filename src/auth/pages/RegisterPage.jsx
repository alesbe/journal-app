import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
  email: '',
  password: '',
  displayName: ''
}

// Estas son las validaciones que le vamos a pasar a nuestro useForm()
const formValidations = {
  email: [ (value) => value.includes('@') , 'El email debe de tener una @'],
  password: [ (value) => value.length <= 6 , 'La contraseña debe tener más de 6 caracteres'],
  displayName: [ (value) => value.length >= 1 , 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const {
    formState, displayName, email, password,
    isFormValid, displayNameValid, emailValid, passwordValid,
    onInputChange,
  } = useForm(formData, formValidations);

  console.log( displayNameValid );

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <AuthLayout title = 'Crear cuenta'>
      <form onSubmit={ onSubmit }>
          <Grid container>
          <Grid item xs = { 12 } sx = {{ mt: 2 }}>
              <TextField
                label = "Nombre completo"
                type = "text"
                placeholder = "Álvaro Esparza"
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                error={ true }
                helperText="El nombre es obligatorio"
              />
            </Grid>

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
              <Grid item xs = { 12 }>
                <Button
                  type="submit"
                  variant = 'contained'
                  fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction = 'row' justifyContent = 'end'>
            <Typography sx = {{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component = { RouterLink } color = 'inherit' to = "/auth/login">
              Iniciar sesión
            </Link>
          </Grid>
        </form>
    </AuthLayout>
  )
}
