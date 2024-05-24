/**
 * Los thunks son tareas asincronas a las que se les puede hacer dispatch. Su peculiaridad es que son asíncronas.
 * 
 * Se usan para, por ejemplo, hacer dispatch al action que deja el estado en checking credentials mientras se ejecuta otro action.
 */

import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
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

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        // Si el registro falla, se llama al action logout y se le pasa errorMessage en un objeto, ya que el action espera un payload con el atributo errorMessage.
        if( !ok ) return dispatch( logout({errorMessage}) );

        dispatch(login({ uid, displayName, email, photoURL }));
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const res = await loginWithEmailPassword({ email, password });

        if( !res.ok ) return dispatch( logout( res ) );
        dispatch( login(res) )

    }
}

// logoutFirebase() para Firebase, logout() hace el logout en nuestro store, es decir, se encarga de cambiar el estado.
export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();

        dispatch( clearNotesLogout() );
        dispatch( logout() );
    }
}