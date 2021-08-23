import { useEffect, useState } from "react";
import {
  createMeteo,
  deleteMeteo,
  listenMeteos,
  updateMeteo,
} from "../firebase/meteo";

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

  const reset = () => {
    setModLoading(false);
    setModSuccess(false);
    setModError(null);
  };

  const createMeteoHanler = (meteo) => {
    setModLoading(true);
    createMeteo(meteo)
      .then(() => setModSuccess(true))
      .catch((error) => {
        console.error(error);
        setModError(error);
      })
      .finally(() => setModLoading(false));
  };

  const deleteHandler = (id) => {
    deleteMeteo(id).catch((error) => {
      console.error(error);
      setError(error);
    });
  };

  const updateMeteoHanler = (id, meteo) => {
    setModLoading(true);
    updateMeteo(id, meteo)
      .then(() => setModSuccess(true))
      .catch((error) => {
        console.error(error);
        setModError(error);
      })
      .finally(() => setModLoading(false));
  };

  const mod = {
    create: createMeteoHanler,
    update: updateMeteoHanler,
    modLoading,
    modError,
    modSuccess,
    reset,
  };

  return { meteos, loading, error, mod, deleteHandler };
};

export default useMeteo;
