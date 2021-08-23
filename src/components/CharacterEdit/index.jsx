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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { getCharacter, char, updateChar } = useCharacters(props.discordId);
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
    setLoading(true);
    updateChar(props.charId, { name, money: +money, status: +status }).then(({ res, error }) => {
      setLoading(false);
      setError(error);
      setSuccess(res);
    });
  };

  console.log("rerendu");
  let form = (
    <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
      {error && <h3>Une erreur est survenue veuillez reessayer!</h3>}
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

  if (loading) {
    form = (
      <div className={classes.loading}>
        <Loader />
      </div>
    );
  } else if (!loading && success) {
    form = <Success />;
  }

  return <Modal onClose={props.onClose}>{form}</Modal>;
};

export default CharacterEdit;
