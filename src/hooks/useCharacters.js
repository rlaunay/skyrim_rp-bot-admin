import { useCallback, useEffect, useState } from "react";
import {
  getRolePlayerCharacters,
  getOneCharacter,
  updateCharcter,
  listenPlayerCharacters,
} from "../firebase/characters";

const useRolePlayers = (discordId) => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [char, setChar] = useState(null);

  const getCharacters = useCallback(() => {
    setIsLoading(true);
    getRolePlayerCharacters(discordId)
      .then(({ res, error }) => {
        setIsLoading(false);
        setCharacters(res);
        setError(error);
      })
      .catch((error) => {
        setCharacters(null);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const listenCharcters = () => {
    setIsLoading(true);
    return listenPlayerCharacters(
      discordId,
      (chars) => {
        setIsLoading(false);
        console.log(chars);
        setCharacters(chars);
      },
      (err) => {
        setIsLoading(false);
        console.log(err);
        setError(err);
      }
    );
  };

  const getCharacter = async (charId) => {
    getOneCharacter(discordId, charId)
      .then(({ res, error }) => {
        setChar(res);
      })
      .catch(() => {
        setChar(null);
      });
  };

  const updateChar = async (charId, updatedChar) => {
    return await updateCharcter(discordId, charId, updatedChar);
  };

  return {
    listenCharcters,
    characters,
    error,
    isLoading,
    getCharacters,
    getCharacter,
    char,
    updateChar,
  };
};

export default useRolePlayers;
