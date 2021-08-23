import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
  addDoc,
} from "firebase/firestore";
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

export const updateMeteo = async (id, meteo) => {
  const ref = doc(db, "meteos", id);
  await updateDoc(ref, meteo);
};

export const deleteMeteo = async (id) => {
  const ref = doc(db, "meteos", id);
  await deleteDoc(ref);
};

export const createMeteo = async (id, meteo) => {
  await addDoc(collection(db, "meteos"), meteo);
};
