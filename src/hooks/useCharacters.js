import { useCallback, useEffect, useState } from "react";
import {
  getRolePlayerCharacters,
  getOneCharacter,
  updateCharacter,
  listenPlayerCharacters,
} from "../firebase/characters";

const useRolePlayers = (discordId) => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [char, setChar] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateError, setUpdateError] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const getCharacters = useCallback(() => {
    setIsLoading(true);
    getRolePlayerCharacters(discordId)
      .then((res) => setCharacters(res))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  const listenCharcters = () => {
    setIsLoading(true);
    return listenPlayerCharacters(
      discordId,
      (chars) => {
        setIsLoading(false);
        setCharacters(chars);
      },
      (err) => {
        setIsLoading(false);
        console.error(err);
        setError(err);
      }
    );
  };

  const getCharacter = async (charId) => {
    getOneCharacter(discordId, charId)
      .then((res) => {
        setChar(res);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  };

  const updateChar = async (charId, updatedChar) => {
    setUpdateLoading(true);
    updateCharacter(discordId, charId, updatedChar)
      .then(() => setUpdateSuccess(true))
      .catch((error) => setUpdateError(error))
      .finally(() => setUpdateLoading(false));
  };

  const update = {
    updateChar,
    updateLoading,
    updateError,
    updateSuccess,
  };

  return {
    listenCharcters,
    characters,
    error,
    isLoading,
    getCharacters,
    getCharacter,
    char,
    update,
  };
};

export default useRolePlayers;
