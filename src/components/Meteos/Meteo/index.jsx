import React from "react";
import Times from "../../Icons/Times";

import classes from "./Meteo.module.scss";

const Meteo = ({ meteo, onRemove, onEdit }) => (
  <tr className={classes.tr}>
    <th onClick={() => onEdit(meteo)}>{meteo.name}</th>
    <th onClick={() => onEdit(meteo)}>{meteo.channelId}</th>
    <th onClick={() => onEdit(meteo)}>{meteo.beau}</th>
    <th onClick={() => onEdit(meteo)}>{meteo.humide}</th>
    <th onClick={() => onEdit(meteo)}>{meteo.froid}</th>
    <th className={classes.suppr}>
      <div onClick={() => onRemove(meteo.id)}>
        <Times />
      </div>
    </th>
  </tr>
);

export default Meteo;
