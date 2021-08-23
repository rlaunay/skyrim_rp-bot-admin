import { useEffect, useState } from "react";
import { createMeteo, deleteMeteo, listenMeteos } from "../firebase/meteo";

const useMeteo = () => {
  const [meteos, setMeteos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [modLoading, setModLoading] = useState(false);
  const [modSuccess, setModSuccess] = useState(false);
  const [modError, setModError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const observer = listenMeteos(
      (meteos) => {
        setLoading(false);
        setMeteos(meteos);
      },
      (error) => {
        setLoading(false);
        setError(error);
      }
    );

    return () => {
      console.log("ca nettoie 2 ici ._.");
      observer();
    };
  }, []);

  const createMeteoHanler = (name, channelId, beau, humide, froid) => {
    setModLoading(true);
    createMeteo({ name, channelId, beau, humide, froid })
      .then(() => setModSuccess(true))
      .catch(setModError)
      .finally(() => setModLoading(false));
  };

  const deleteHandler = (id) => {
    deleteMeteo(id).catch((error) => setError(error));
  };

  const mod = {
    create: createMeteoHanler,
    modLoading,
    modError,
    modSuccess,
  };

  return { meteos, loading, error, mod, deleteHandler };
};

export default useMeteo;
