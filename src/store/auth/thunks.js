// Los thunks son tareas asincronas a las que se les puede hacer dispatch. Su peculiaridad es que son asíncronas.

import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./";

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const response = signInWithGoogle();
    }
}