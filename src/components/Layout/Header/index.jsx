import React from "react";
import useAuth from "../../../context/authContext";
import Button from "./../../UI/Button";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.scss";

const Header = () => {
  const { logout } = useAuth();

  const logoutHandler = () => {
    console.log("oui");
    logout();
  };

  return (
    <header className={classes.header}>
      <h1>Skyrim Bot admin</h1>
      <div className={classes.links}>
        <NavLink exact activeClassName={classes.active} to="/">
          Gestion de perso
        </NavLink>
        <NavLink activeClassName={classes.active} to="/meteo">
          Gestion meteo
        </NavLink>
      </div>
      <Button onClick={logoutHandler} type="button">
        Logout
      </Button>
    </header>
  );
};

export default Header;
