import { db } from "./config";
import {
  collection,
  onSnapshot,
  getDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

export const getRolePlayerCharacters = async (discordId) => {
  try {
    const snap = await getDocs(collection(db, `users/${discordId}/characters`));
    const res = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return { res, error: null };
  } catch (error) {
    return { res: null, error };
  }
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
  try {
    const snap = await getDoc(
      doc(db, "users", discordId, "characters", charId)
    );

    const res = { id: snap.id, ...snap.data() };
    return { res, error: null };
  } catch (error) {
    return { res: null, error };
  }
};

export const updateCharcter = async (discordId, charId, char) => {
  try {
    const ref = doc(db, "users", discordId, "characters", charId);

    await updateDoc(ref, char);
    return { res: true, error: false };
  } catch (error) {
    return { res: false, error: true };
  }
};
