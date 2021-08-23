import React from "react";
import { useForm } from "react-hook-form";

import Button from "./../../components/UI/Button";
import Input from "./../../components/UI/Input";
import useAuth from "../../context/authContext";
import { loginFom } from "./../../helpers/form-object";

import classes from "./Login.module.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, error: userError } = useAuth();

  const submitHandler = (data) => {
    login(data.email, data.password);
  };

  return (
    <div className={classes.back}>
      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        <h1>Login form</h1>
        <p className={classes.error}>{userError}</p>
        <Input {...loginFom.email} error={errors.email} register={register} />
        <Input
          {...loginFom.password}
          error={errors.password}
          register={register}
        />

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
