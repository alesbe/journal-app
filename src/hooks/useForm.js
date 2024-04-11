import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setformValidation ] = useState({});

    useEffect(() => {
        createValidators();
    }, [ formState ])

    // Usamos useMemo() para memorizar formState y que solo se vuelva a calcular cuando cambie
    // Este booleano indica si todo el formulario es válido
    const isFormValid = useMemo( () => {
        
        for (const formValue of Object.keys( formValidation )) {
            if( formValidation[formValue] !== null ) return false;
        }
        
        return true;
    }, [ formValidation ] )
    
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckedValues = {};

        // Iteramos cada validación de formValidations y desestructuramos el objeto
        for (const formField of Object.keys(formValidations)) {
            const [ fn, errorMessage = 'Este campo es requerido.' ] = formValidations[formField];

            // Rellenamos el objeto con { formFieldValid: null } en caso de cumplirse, o { formFieldValid: "Este es un mensaje de error." } en caso de no cumplirse 
            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setformValidation( formCheckedValues );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    }
}