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
  where,
} from "firebase/firestore";

const usersRef = collection(db, "users");

export const getRolePlayers = async (searchParams = "") => {
  let queryRP = query(usersRef, orderBy("discordTag"));

  if (searchParams.length > 1) {
    queryRP = query(queryRP, where("discordTag", ">=", searchParams));
  }

  const snapshot = await getDocs(query(queryRP, limit(10)));

  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return data;
};

export const getNextRolePlayers = async (last) => {
  const snapshot = await getDocs(
    query(
      usersRef,
      orderBy("discordTag"),
      startAfter(last["discordTag"]),
      limit(10)
    )
  );

  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return data;
};

export const getPreviousRolePlayers = async (first) => {
  const snapshot = await getDocs(
    query(
      usersRef,
      orderBy("discordTag"),
      endBefore(first["discordTag"]),
      limitToLast(10)
    )
  );

  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return data;
};
