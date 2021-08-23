import React from "react";
import { useForm } from "react-hook-form";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { meteoForm } from "../../helpers/form-object";
import useMeteo from "../../hooks/useMeteo";

const MeteoEdit = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    const meteo = {
      name: data.name,
      channelId: data.channelId,
      beau: data.beau,
      humide: data.humide,
      froid: data.froid,
    };
    props.Modal.create(meteo);
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Input
          {...meteoForm.channelId}
          error={errors.channelId}
          register={register}
        />
        <Input {...meteoForm.name} error={errors.name} register={register} />
        <Input {...meteoForm.beau} error={errors.beau} register={register} />
        <Input
          {...meteoForm.humide}
          error={errors.humide}
          register={register}
        />
        <Input {...meteoForm.froid} error={errors.froid} register={register} />
        <div className={classes.btns}>
          <Button type="submit">Save</Button>
          <Button type="button" onClick={props.onClose}>
            Close
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default MeteoEdit;
