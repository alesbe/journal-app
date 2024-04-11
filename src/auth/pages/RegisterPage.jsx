import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";

const formData = {
  email: '',
  password: '',
  displayName: ''
}

// Estas son las validaciones que le vamos a pasar a nuestro useForm()
const formValidations = {
  email: [ (value) => value.includes('@') , 'El email debe de tener una @'],
  password: [ (value) => value.length >= 6 , 'La contraseña debe tener más de 6 caracteres'],
  displayName: [ (value) => value.length >= 1 , 'El nombre es obligatorio'],
}

export const RegisterPage = () => {
  
  const [formSubmitted, setformSubmitted] = useState(false)

  const {
    formState, displayName, email, password,
    isFormValid, displayNameValid, emailValid, passwordValid,
    onInputChange,
  } = useForm(formData, formValidations);

  console.log( displayNameValid );

  const onSubmit = ( event ) => {
    event.preventDefault();
    
    setformSubmitted(true);
  }

  return (
    <AuthLayout title = 'Crear cuenta'>
      <h1>FormValid { isFormValid ? 'Valido' : 'Incorrecto' }</h1>

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
                error={ !!displayNameValid && formSubmitted }
                helperText={ displayNameValid }
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
                error={ !!emailValid && formSubmitted }
                helperText={ emailValid }
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
                error={ !!passwordValid && formSubmitted }
                helperText={ passwordValid }
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
