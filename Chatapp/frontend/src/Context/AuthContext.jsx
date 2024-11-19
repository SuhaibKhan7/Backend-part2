import { createContext, useEffect, useState } from "react";
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

  const submitLogin = async (e) => {
    e.preventDefault();
    console.log(login);
    try {
      const response = await postRequest("auth/login", login);
      console.log(response.error);
      if (response.error) {
        setLoginError(response.error); //set error
      } else {
        setUser(response);
        localStorage.setItem("user", JSON.stringify(response));
        navigate("/");
      }
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{ user, login, setLogin, submitLogin, loginError }}
    >
      {children}
    </AuthContext.Provider>
  );
};
