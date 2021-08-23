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
          <h3 className={classes.h3}>Il n'y pas de meteos</h3>
        )}
        {props.meteos.map((meteo) => (
          <Meteo meteo={meteo} onRemove={props.onRemove} />
        ))}
      </tbody>
    </table>
  );
};

export default Meteos;
