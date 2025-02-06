import { useState } from "react";

export function useInput(defaultValue, validationFn) {
    // console.log('i got here')
  const [enteredValues, setEnteredValues] = useState(defaultValue);

  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValues);
//   console.log(valueIsValid)

  function handleInputChange(event) {
    setEnteredValues(event.target.value);

    setDidEdit(false);
  }
  function handleInputBlur() {
    setDidEdit(true);
  }
  return {
    value: enteredValues,
    handleInputBlur,
    handleInputChange,
    hasError: didEdit && !valueIsValid,
  };
}
