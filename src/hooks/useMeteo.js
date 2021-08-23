import { useEffect, useState } from "react";
import { listenMeteos } from "../firebase/meteo";

const useMeteo = () => {
  const [meteos, setMeteos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return { meteos, loading, error };
};

export default useMeteo;
