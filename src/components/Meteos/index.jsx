import React from "react";
import Meteo from "./Meteo";

import classes from "./Meteos.module.scss";

const Meteos = (props) => {
  if (props.error) return <h3>Une erreur est survenue</h3>;

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Channel ID</th>
          <th>Beau temps (%)</th>
          <th>Temps humide (%)</th>
          <th>Temps froid (%)</th>
          <th>Suppr</th>
        </tr>
      </thead>
      <tbody>
        {props.meteos.length === 0 && (
          <tr>
            <th colSpan="6" className={classes.h3}>
              Il n'y pas de meteos
            </th>
          </tr>
        )}
        {props.meteos.map((meteo) => (
          <Meteo
            key={meteo.id}
            meteo={meteo}
            onRemove={props.onRemove}
            onEdit={props.onEdit}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Meteos;
