import React, { useEffect, useState } from "react";
import Character from "./Character";

import classes from "./Characters.module.scss";

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;

const Characters = ({ characters, error, isOpen, onEdit }) => {
  const [state, setState] = useState(isOpen ? ENTERING : HIDDEN);
  const className =
    state === VISIBLE
      ? `${classes.characters} ${classes.open}`
      : classes.characters;

  useEffect(() => {
    if (!isOpen) {
      setState(LEAVING);
    } else {
      setState((s) => (s === HIDDEN ? ENTERING : VISIBLE));
    }
  }, [isOpen]);

  useEffect(() => {
    if (state === LEAVING) {
      const timer = setTimeout(() => {
        setState(HIDDEN);
      }, 200);

      return () => {
        clearTimeout(timer);
      };
    } else if (state === ENTERING) {
      document.body.offsetHeight;
      setState(VISIBLE);
    }
  }, [state]);

  let charactersEl = <h3>Aucun personnages</h3>;
  if (characters.length > 0) {
    charactersEl = characters.map((char) => (
      <Character onEdit={onEdit} char={char} key={char.id} />
    ));
  }
  const result = error ? (
    <h3>Oups une erreur est survenue :D</h3>
  ) : (
    charactersEl
  );

  if (state === HIDDEN) {
    return null;
  }

  return <ul className={className}>{state !== HIDDEN ? result : ""}</ul>;
};

export default Characters;
