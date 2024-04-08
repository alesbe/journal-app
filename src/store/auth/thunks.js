// Los thunks son tareas asincronas a las que se les puede hacer dispatch. Su peculiaridad es que son asíncronas.

import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await signInWithGoogle();

        // Si la autenticación sale mal
        if(!result.ok) {
            return dispatch(logout( result.errorMessage ));
        }

        // Si la autenticación sale bien
        dispatch(login( result ));
    }
}