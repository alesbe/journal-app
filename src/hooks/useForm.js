import { useEffect, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setformValidation ] = useState({});

    useEffect(() => {
        createValidators();
    }, [ formState ])
    
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
    }
}