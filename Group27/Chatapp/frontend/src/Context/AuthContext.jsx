import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const handleLogin = useEffect(async () => {
    try {
      const response = await postRequest( "auth/login", JSON.stringify(loginInfo));
    } catch (error) {}
  }, [loginInfo]);

  return (
    <AuthContext.Provider value={{ loginInfo, setLoginInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
