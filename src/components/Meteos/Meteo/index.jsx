import React from "react";

const Meteo = ({ meteo, onRemove }) => (
  <tr>
    <th>{meteo.name}</th>
    <th>{meteo.channelId}</th>
    <th>{meteo.beau}</th>
    <th>{meteo.humide}</th>
    <th>{meteo.froid}</th>
    <th onClick={onRemove}>x</th>
  </tr>
);

export default Meteo;
