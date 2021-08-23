import { db } from "./config";
import {
  collection,
  onSnapshot,
  getDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const getRolePlayerCharacters = async (discordId) => {
  const snap = await getDocs(collection(db, `users/${discordId}/characters`));
  const res = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return res;
};

export const listenPlayerCharacters = (discordId, next, error) => {
  return onSnapshot(
    collection(db, `users/${discordId}/characters`),
    (snap) => {
      const chars = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      next(chars);
    },
    error
  );
};

export const getOneCharacter = async (discordId, charId) => {
  const snap = await getDoc(doc(db, "users", discordId, "characters", charId));

  const res = { id: snap.id, ...snap.data() };
  return res;
};

export const updateCharacter = async (discordId, charId, char) => {
  const ref = doc(db, "users", discordId, "characters", charId);
  await updateDoc(ref, char);
};

export const deleteCharacter = async (discordId, charId) => {
  const ref = doc(db, "users", discordId, "characters", charId);
  await deleteDoc(ref);
};
