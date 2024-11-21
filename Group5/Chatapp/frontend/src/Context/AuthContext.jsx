import { createContext, useEffect, useState, useCallback } from "react";
import { postRequest } from "../services/service";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loginError, setLoginError] = useState(null);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const submitLogin = useCallback(
    async (e) => {
      e.preventDefault();
      console.log(login);
      setLoginError(null);
      try {
        const response = await postRequest("auth/login", login);
        console.log(response.error);
        if (response.error) {
          return setLoginError(response.message || "Invalid credentials");
        } else {
          setUser(response);
          localStorage.setItem("user", JSON.stringify(response));
          navigate("/");
        }
      } catch (error) {}
    },
    [login]
  );

  const handleLogout = async () => {
    const response = await postRequest("auth/logout");
    console.log(response);
    localStorage.removeItem("user");
    navigate("/login");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, setLogin, submitLogin, loginError, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
