import { useEffect, useState } from "react";
import {
  getRolePlayers,
  getNextRolePlayers,
  getPreviousRolePlayers,
} from "../firebase/rolePlayers";

const useRolePlayers = () => {
  const [rolePlayers, setRolePlayers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [nbRolePlayer, setNbRolePlayer] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRolePlayers()
      .then((data) => {
        setRolePlayers(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const next = () => {
    setNbRolePlayer(rolePlayers.length);
    if (rolePlayers.length <= 1) return;
    setIsLoading(true);
    getNextRolePlayers(rolePlayers[rolePlayers.length - 1])
      .then((data) => {
        if (data.length === 0) return; // setError({ error: { code: "limit" } });
        setRolePlayers(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const previous = () => {
    setNbRolePlayer(rolePlayers.length);
    setIsLoading(true);
    getPreviousRolePlayers(rolePlayers[0])
      .then((data) => {
        if (data.length === 0) return; // setError({ error: { code: "limit" } });
        setRolePlayers(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getSearch = (txt) => {
    setSearch(txt);
  };

  return {
    rolePlayers,
    next,
    previous,
    error,
    isLoading,
    nbRolePlayer,
    getSearch,
  };
};

export default useRolePlayers;
