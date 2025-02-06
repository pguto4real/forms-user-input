import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
  } = useInput("", (value) => isNotEmpty(value) && isEmail(value));
  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError,
  } = useInput("", (value) => isNotEmpty(value) && hasMinLength(value));

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
          error={emailHasError && "Please enter a valid email address."}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
        />
        <Input
          label={"Password"}
          type={"password"}
          name={"password"}
          id={"password"}
          error={passwordHasError && "Please enter a valid password."}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
