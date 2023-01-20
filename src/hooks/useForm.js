import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialState = {}, formValidations) => {
  const [formValues, setFromValues] = useState(initialState);
  const [formValidation, setFromValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formValues])

  const isFormValid = useMemo(() => {

    for (const formValue of Object.keys(formValidation)) {
      if( formValidation[formValue] !== null ) return false
    }

    return true;
  }, [formValidation])
  

  const onInputChange = ({ target }) => {
    setFromValues({
      ...formValues,
      [target.name]: target.value,
    });
  }

  const onReset = () => {
    setFromValues(initialState);
  }

  const createValidators = () => {
    const formCheckdValues = {};

    for (const formField of Object.keys( formValidations )) {
      const [fn , errorMessage = 'Este campo es requerido.'] = formValidations[formField]; 

      formCheckdValues[`${ formField }Valid`] = fn( formValues[formField] ) ? null : errorMessage;

    }
    setFromValidation( formCheckdValues );
  }

  return {
    ...formValues,
    onInputChange,
    onReset,
    fromValues: formValues,
    ...formValidation,
    isFormValid
  }
};
