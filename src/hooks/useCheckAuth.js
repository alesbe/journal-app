import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export const useCheckAuth = () => {
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    /**
     * onAuthStateChanged() es un método que ofrece Firebase para comprobar el estado de la autenticación
     * 
     * Si no hay un usuario de Firebase autenticado, llamamos a logout() para cambiar el estado de la aplicación a not-aunthenticated.
     * Si hay un usuario autenticado, llamaremos a login() para cargarlo en nuestro store.
     */
    useEffect(() => {

        onAuthStateChanged( FirebaseAuth, async( user ) => {
            if( !user ) return dispatch( logout() );

            const { uid, email, displayName, photoURL } = user;

            dispatch( login({ uid, email, displayName, photoURL }) );
        } );

    }, []);

    return status;
}
