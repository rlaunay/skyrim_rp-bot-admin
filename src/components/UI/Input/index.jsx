import React from "react";

import Exclamation from "../../Icons/Exclamation";

import classes from "./Input.module.scss";

const Input = ({ type, label, name, register, rules, error, errorMsg, disabled }) => {
  const className = error ? `${classes.container} ${classes.invalid}` : classes.container;

  const errorMessage = error ? errorMsg[error.type] : "";

  return (
    <div className={className}>
      <div className={classes.input_container}>
        <input disabled={disabled} id={name} type={type} placeholder=" " {...register(name, rules)} />
        <label htmlFor={name}>{label}</label>
        <Exclamation />
      </div>
      <div className={classes.error}>{errorMessage}</div>
    </div>
  );
};

export default Input;
