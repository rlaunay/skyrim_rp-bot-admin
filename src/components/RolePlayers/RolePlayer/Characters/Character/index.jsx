import React from "react";
import Circle from "./../../../../Icons/Circle";

import classes from "./Character.module.scss";

const Character = ({ char, onEdit }) => {
  const classStatus = char.status === 1 ? classes.actif : classes.inactif;

  const clickHandler = () => {
    onEdit(char.id);
  };

  return (
    <li className={classes.character} onClick={clickHandler}>
      <h4>{char.name}</h4>
      <div className={classes.money}>{char.money} septims</div>
      <div className={classes.status}>
        <Circle className={classStatus} />
      </div>
    </li>
  );
};

export default Character;
