import { useState } from "react";

export function useInput(defaultValue) {
  const [enteredValues, setEnteredValues] = useState(defaultValue);

  const [didEdit, setDidEdit] = useState(false);

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
  };
}
