import React from "react";

import classes from "./Meteos.module.scss";

const Meteos = (props) => {
  if (props.error) return <h3>Une erreur est survenue</h3>;

  return (
    <ul className={classes.ul}>
      {props.meteos.length === 0 && (
        <h3 className={classes.h3}>Il n'y pas de meteos</h3>
      )}
    </ul>
  );
};

export default Meteos;
