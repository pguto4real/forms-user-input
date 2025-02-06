import { useState } from "react";

export function useInput(fetchFn, initialValue) {
  const [enteredValues, setEnteredValues] = useState({
      email: "",
      password: "",
    });
  
    const [didEdit, setDidEdit] = useState({
      email: false,
      password: false,
    });
}