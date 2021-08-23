import React from "react";
import SearchIcon from "./../Icons/SearchIcon";

import classes from "./Search.module.scss";

const Search = () => {
  return (
    <div className={classes.search}>
      <select name="choix" id="choix">
        <option value="discordTag">discord tag</option>
        <option value="character">nom de personnage</option>
      </select>
      <div className={classes.separator}>
        <div></div>
      </div>
      <input type="text" placeholder="Rechercher" />
      <SearchIcon />
    </div>
  );
};

export default Search;
