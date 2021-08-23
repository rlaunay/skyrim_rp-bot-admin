import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { meteoForm } from "../../helpers/form-object";
import Success from "../UI/Success";
import Loader from "../UI/Loader";

import classes from "./MeteoEdit.module.scss";
import { updateProfile } from "firebase/auth";

const MeteoEdit = ({
  editedMeteo,
  onClose,
  mod: { create, modLoading, modSuccess, modError, reset, update },
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [errorSum, setErrorSum] = useState(null);

  const submitHandler = (data) => {
    const meteo = {
      name: data.name,
      channelId: data.channelId,
      beau: +data.beau,
      humide: +data.humide,
      froid: +data.froid,
    };
    console.log(meteo);
    const sum = +data.beau + +data.humide + +data.froid;
    if (sum > 100) return setErrorSum("La sommes des 3 doit être egale a 100");
    if (editedMeteo) {
      update(editedMeteo.id, meteo);
    } else {
      create(meteo);
    }
  };

  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
    if (editedMeteo) {
      setValue("channelId", editedMeteo.channelId);
      setValue("name", editedMeteo.name);
      setValue("beau", editedMeteo.beau);
      setValue("humide", editedMeteo.humide);
      setValue("froid", editedMeteo.froid);
    }
  }, []);

  let form = (
    <form onSubmit={handleSubmit(submitHandler)}>
      {modError && (
        <h3 className={classes.error}>
          Une erreur est survenue veuillez reessayer!
        </h3>
      )}
      {errorSum && <h3 className={classes.error}>{errorSum}</h3>}
      <Input
        {...meteoForm.channelId}
        error={errors.channelId}
        register={register}
      />
      <Input {...meteoForm.name} error={errors.name} register={register} />
      <Input {...meteoForm.beau} error={errors.beau} register={register} />
      <Input {...meteoForm.humide} error={errors.humide} register={register} />
      <Input {...meteoForm.froid} error={errors.froid} register={register} />
      <div className={classes.btns}>
        <Button type="submit">Save</Button>
        <Button type="button" onClick={onClose}>
          Close
        </Button>
      </div>
    </form>
  );

  if (modLoading) {
    form = (
      <div className={classes.loading}>
        <Loader />
      </div>
    );
  } else if (!modLoading && modSuccess) {
    form = <Success />;
  }

  return <Modal onClose={onClose}>{form}</Modal>;
};

export default MeteoEdit;
