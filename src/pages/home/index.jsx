import React, { useState } from "react";
import RolePlayers from "../../components/RolePlayers";
import Search from "../../components/Search";
import useRolePlayers from "../../hooks/useRolePlayers";
import Button from "../../components/UI/Button";
import Loader from "../../components/UI/Loader";
import H1 from "../../components/UI/Title/H1";

import ChevronLeft from "./../../components/Icons/ChevronLeft";
import ChevronRight from "./../../components/Icons/ChevronRight";

import classes from "./Home.module.scss";
import Skeletons from "../../components/UI/Skeletons";

const Home = () => {
  const { rolePlayers, next, previous, error, isLoading, firstLoad, getSearch } =
    useRolePlayers();

  return (
    <React.Fragment>
      <H1 className={classes.h1}>Gestion des personnages</H1>
      <Search onSearch={getSearch} />
      {isLoading ? (
        !firstLoad ? (
          <Skeletons nb={lastRolePlayer} />
        ) : (
          <div className={classes.oui}>
            <Loader />
          </div>
        )
      ) : (
        <RolePlayers items={rolePlayers} error={error} />
      )}
      <div className={classes.btns}>
        <Button onClick={previous}>
          <ChevronLeft />
        </Button>
        <Button onClick={next}>
          <ChevronRight />
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Home;
