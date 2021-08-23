import { db } from "./config";
import {
  collection,
  orderBy,
  limit,
  query,
  getDocs,
  startAfter,
  endBefore,
  limitToLast,
} from "firebase/firestore";

const usersRef = collection(db, "users");

export const getRolePlayers = async () => {
  try {
    const snapshot = await getDocs(
      query(usersRef, orderBy("discordTag"), limit(10))
    );

    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const getNextRolePlayers = async (last) => {
  try {
    const snapshot = await getDocs(
      query(
        usersRef,
        orderBy("discordTag"),
        startAfter(last["discordTag"]),
        limit(10)
      )
    );

    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const getPreviousRolePlayers = async (first) => {
  try {
    const snapshot = await getDocs(
      query(
        usersRef,
        orderBy("discordTag"),
        endBefore(first["discordTag"]),
        limitToLast(10)
      )
    );

    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
