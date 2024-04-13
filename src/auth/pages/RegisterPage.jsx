import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

// Campos del formulario
const formData = {
  email: '',
  password: '',
  displayName: ''
}

// Validaciones correspondientes a los campos del formulario. Se usan con el useForm()
const formValidations = {
  email: [ (value) => value.includes('@') , 'El email debe de tener una @'],
  password: [ (value) => value.length >= 6 , 'La contraseña debe tener más de 6 caracteres'],
  displayName: [ (value) => value.length >= 1 , 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  // State para comprobar si el formulario ha sido submitted. Se usa para lanzar los errores en los campos del formulario antes de ser enviado
  const [formSubmitted, setformSubmitted] = useState(false)

  // Con esto obtenemos el estado de la autenticación. Lo usamos para deshablitar el botón de Crear cuenta mientras se esté loguenado.
  // Usamos useMemo() para que no se esté comprobando cada vez que cambiemos algo del formulario
  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

  // Custom hook para control del formulario. Controla el state de los campos y se encarga de validarlos.
  const {
    formState, displayName, email, password,
    isFormValid, displayNameValid, emailValid, passwordValid,
    onInputChange,
  } = useForm(formData, formValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();
    setformSubmitted(true);

    if(!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword( formState ));
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
              <Grid item xs = { 12 } display={ !!errorMessage ? '': 'none' }>
                <Alert severity="error">{ errorMessage }</Alert>
              </Grid>

              <Grid item xs = { 12 }>
                <Button
                  disabled={ isCheckingAuthentication }
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
