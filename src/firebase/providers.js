import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

/**
 * Inicia sesión en Firebase con Google. Abre un popup para que se loguee.
 * 
 * @returns Datos del usuario o error
 */
export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;
        
        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
    }
}

/**
 * Crea un usuario en Firebase con usuario y contraseña.
 * 
 * @param Datos del usuario
 * @returns Datos del usuario o error
 */
export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        // Creamos el usuario en firebase
        const res = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const{ uid, photoURL } = res.user;

        // Actualizamos el usuario en Firebase con el nombre de usuario que ha introducido el usuario
        await updateProfile( FirebaseAuth.currentUser, { displayName } );

        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        console.log(error);

        return {
            ok: false,
            errorMessage: error.message
        }
    }
}