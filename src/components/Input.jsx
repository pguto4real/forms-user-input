import React from "react";

const Input = ({ label, id,error,...props }) => {
    console.log(error)
  return (
    <div className="control no-margin">
      <label htmlFor="email">{label}</label>
      <input
        id={id}
        {...props}
        // onBlur={() => handleInputBlur("email")}
        // onChange={() => handleInputChange("email", event.target.value)}
        //   value={enteredValues.email}
      />
      <div className="control-error">
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Input;
