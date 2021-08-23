import React, { useEffect, useState } from "react";
import SearchIcon from "./../Icons/SearchIcon";

import classes from "./Search.module.scss";

const Search = (props) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search.length > 1) {
      const debounce = setTimeout(() => {
        console.log('Ca recherche ou quoi ?');
        props.onSearch(search);
      }, 500);

      return () => {
        console.log('debounce netoyed :D')
        clearTimeout(debounce);
      }
    }
  }, [search])

  const changeHandler = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className={classes.search}>
      <select name="choix" id="choix">
        <option value="discordTag">discord tag</option>
        {/* <option value="character">nom de personnage</option> */}
      </select>
      <div className={classes.separator}>
        <div></div>
      </div>
      <input value={search} onChange={changeHandler} type="text" placeholder="Rechercher" />
      <SearchIcon />
    </div>
  );
};

export default Search;
