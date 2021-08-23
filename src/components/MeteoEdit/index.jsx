import React from "react";
import { useForm } from "react-hook-form";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import { meteoForm } from "../../helpers/form-object";

const MeteoEdit = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Modal onClose={props.onClose}>
      <form>
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
      </form>
    </Modal>
  );
};

export default MeteoEdit;
