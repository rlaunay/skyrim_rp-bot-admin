import React, { useState } from "react";
import Plus from "../../components/Icons/Plus";
import MeteoEdit from "../../components/MeteoEdit";
import Meteos from "../../components/Meteos";
import H1 from "../../components/UI/Title/H1";
import useMeteo from "../../hooks/useMeteo";
import Loader from "./../../components/UI/Loader";

import classes from "./Meteo.module.scss";

const Meteo = () => {
  const { meteos, error, loading, mod, deleteHandler } = useMeteo();
  const [open, setOpen] = useState(false);

  const toggleHandler = () => {
    setOpen((old) => !old);
  };

  return (
    <React.Fragment>
      {open && <MeteoEdit onClose={toggleHandler} mod={mod} />}
      <H1>Gestion de la meteo</H1>
      {loading ? (
        <Loader />
      ) : (
        <Meteos error={error} meteos={meteos} onRemove={deleteHandler} />
      )}
      <button className={classes.plus} onClick={toggleHandler}>
        <Plus />
      </button>
    </React.Fragment>
  );
};

export default Meteo;
