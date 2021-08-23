import React from "react";

import Skeleton from "./Skeleton";

import classes from "./Skeletons.module.scss";

const Skeletons = ({ nb }) => {
  return (
    <ul className={classes.ul}>
      {Array(nb)
        .fill(0)
        .map((_, i) => (
          <Skeleton key={i} />
        ))}
    </ul>
  );
};

export default Skeletons;
