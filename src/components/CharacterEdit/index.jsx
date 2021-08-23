import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "./../UI/Modal";
import useCharacters from "./../../hooks/useCharacters";
import Loader from "../UI/Loader";

import { characterForm } from "./../../helpers/form-object";

import classes from "./CharacterEdit.module.scss";
import Success from "../UI/Success";

const CharacterEdit = (props) => {
  const { 
    getCharacter, 
    char, 
    update: { 
      updateChar, 
      updateLoading, 
      updateError, 
      updateSuccess 
    } 
  } = useCharacters(props.discordId);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (char) {
      setValue("name", char.name);
      setValue("money", char.money);
      setValue("status", char.status);
    } else {
      getCharacter(props.charId);
      console.log("oui");
    }
  }, [char]);

  const submitHandler = ({ name, money, status }) => {
    if (money === char.money && name === char.name && status === char.status) return;
    updateChar(props.charId, { name, money: +money, status: +status });
  };

  let form = (
    <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
      {updateError && <h3>Une erreur est survenue veuillez reessayer!</h3>}
      <Input {...characterForm.name} error={errors.name} register={register} disabled={!char} />
      <Input {...characterForm.money} error={errors.money} register={register} disabled={!char} />
      <select disabled={!char} {...register("status", characterForm.status.rules)}>
        <option value="0">Inactif</option>
        <option value="1">Actif</option>
      </select>
      <div className={classes.btns}>
        <Button type="submit">Save</Button>
        <Button type="button" onClick={props.onClose}>
          Close
        </Button>
      </div>
    </form>
  );

  if (updateLoading) {
    form = (
      <div className={classes.loading}>
        <Loader />
      </div>
    );
  } else if (!updateLoading && updateSuccess) {
    form = <Success />;
  }

  return <Modal onClose={props.onClose}>{form}</Modal>;
};

export default CharacterEdit;
