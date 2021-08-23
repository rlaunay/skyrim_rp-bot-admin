import { useEffect, useState } from "react";
import { getRolePlayers, getNextRolePlayers, getPreviousRolePlayers } from "../firebase/rolePlayers";

const useRolePlayers = () => {
  const [rolePlayers, setRolePlayers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastRolePlayer, setLastRolePlayer] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getRolePlayers()
      .then(({ data, error }) => {
        setError(error);
        setRolePlayers(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  const next = () => {
    setLastRolePlayer(rolePlayers.length);
    if (rolePlayers.length <= 1) return;
    setIsLoading(true);
    getNextRolePlayers(rolePlayers[rolePlayers.length - 1])
      .then(({ data, error }) => {
        setIsLoading(false);
        if (data.length === 0) return; // setError({ error: { code: "limit" } });
        setError(error);
        setRolePlayers(data);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  const previous = () => {
    setLastRolePlayer(rolePlayers.length);
    setIsLoading(true);
    getPreviousRolePlayers(rolePlayers[0])
      .then(({ data, error }) => {
        setIsLoading(false);
        if (data.length === 0) return; // setError({ error: { code: "limit" } });
        setError(error);
        setRolePlayers(data);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  return { rolePlayers, next, previous, error, isLoading, lastRolePlayer };
};

export default useRolePlayers;
