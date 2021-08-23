import React from "react";
import RolePlayer from "./RolePlayer";

import classes from "./RolePlayers.module.scss";

const Characters = (props) => {
  return (
    <ul className={classes.ul}>
      {props.error ? (
        <h3 className={classes.h3}>Oups une erreur est survenue :D</h3>
      ) : (
        props.items.map((i) => {
          return <RolePlayer key={i.id} item={i} />;
        })
      )}
    </ul>
  );
};

export default Characters;
