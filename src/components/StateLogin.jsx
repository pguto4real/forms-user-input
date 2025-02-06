import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
  } = useInput("");
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);
  const passwordIsInvalid =
    didEdit.password &&
    !hasMinLength(enteredValues.password, 6) &&
    !isNotEmpty(enteredValues.password);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
    console.log(enteredValues);
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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
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
