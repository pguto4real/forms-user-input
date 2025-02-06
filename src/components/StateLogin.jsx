import { useState } from "react";
import Input from "./Input";

export default function StateLogin() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && enteredValues.password.trim().length < 6;
  // &&    enteredValues.email !== "";

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
    console.log(enteredValues);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: false,
    }));
  }
  function handleInputBlur(identifier) {
    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label={"Email"}
          type={"email"}
          name={"email"}
          id={"email"}
          error={emailIsInvalid && "Please enter a valid email address."}
          onBlur={() => handleInputBlur("email")}
          onChange={() => handleInputChange("email", event.target.value)}
          value={enteredValues.email}
        />
        <Input
          label={"Password"}
          type={"password"}
          name={"password"}
          id={"password"}
          error={passwordIsInvalid && "Please enter a valid password."}
          onBlur={() => handleInputBlur("password")}
          onChange={() => handleInputChange("password", event.target.value)}
          value={enteredValues.password}
        />
        
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
