import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const AuthContext = React.createContext({
  user: null,
  error: null,
  login: () => {},
  logout: () => {},
  isLoading: true,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      setIsLoading(false);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const login = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        setUser(userCred.user);
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        setUser(null);
        switch (error.code) {
          case "auth/invalid-email":
            setError("Email invalide");
            break;
          case "auth/user-disabled":
            setError("Cette email correspond à un utilisateur désactivé");
            break;
          case "auth/user-not-found":
            setError("Utilisateur introuvable");
            break;
          case "auth/wrong-password":
            setError("Mot de passe incorrect");
            break;
          default:
            setError(null);
        }
        setIsLoading(false);
      });
  };

  const logout = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        login,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
