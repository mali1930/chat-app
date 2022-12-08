import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) nav("/chats");
    });
  }, [user, nav]);

  return (
    <AuthContext.Provider value={user}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
export default AuthContext;
