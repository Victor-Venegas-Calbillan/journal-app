import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [fromValues, setFromValues] = useState(initialState);

  const onInputChange = ({ target }) => {
    setFromValues({
      ...fromValues,
      [target.name]: target.value,
    });
  }

  const onReset = () => {
    setFromValues(initialState);
  }

  return {
    ...fromValues,
    onInputChange,
    onReset,
    fromValues
  }
};
