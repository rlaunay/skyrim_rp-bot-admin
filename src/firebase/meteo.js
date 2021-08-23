import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config";

export const listenMeteos = (next, error) => {
  return onSnapshot(
    collection(db, "meteos"),
    (snap) => {
      const meteos = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      next(meteos);
    },
    error
  );
};
