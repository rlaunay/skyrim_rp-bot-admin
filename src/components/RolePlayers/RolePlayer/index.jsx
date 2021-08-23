import React, { useEffect, useState } from "react";
import ChevronDown from "../../Icons/ChevronDown";
import useCharacters from "./../../../hooks/useCharacters";
import Characters from "./Characters";
import CharacterEdit from "../../../components/CharacterEdit";

import classes from "./RolePlayer.module.scss";

const RolePlayer = ({ item }) => {
  const { isLoading, characters, error, listenCharcters } = useCharacters(
    item.id
  );
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [editChar, setEditChar] = useState(null);

  const editCharacterHadnler = (charId) => {
    setEditChar({ discordId: item.id, charId });
    setOpenModal(true);
  };

  const closeHandler = () => {
    setOpenModal(false);
  };

  const clickHandler = () => {
    setOpen((oldOpen) => !oldOpen);
  };

  useEffect(() => {
    if (open && !isLoading) {
      const observer = listenCharcters();

      return () => {
        console.log("ca nettoi ou quoi");
        observer();
      };
    }
  }, [open]);

  const className = open ? `${classes.li} ${classes.open}` : classes.li;
  const classLoading = isLoading
    ? `${classes.user} ${classes.loading}`
    : classes.user;

  return (
    <React.Fragment>
      {openModal && (
        <CharacterEdit
          onClose={closeHandler}
          discordId={editChar.discordId}
          charId={editChar.charId}
        />
      )}
      <li className={className}>
        <button className={classLoading} onClick={clickHandler}>
          <h2>{item.discordTag}</h2>
          <ChevronDown />
        </button>
        {!isLoading && (
          <Characters
            onEdit={editCharacterHadnler}
            isOpen={open}
            characters={characters}
            error={error}
          />
        )}
      </li>
    </React.Fragment>
  );
};

export default RolePlayer;
