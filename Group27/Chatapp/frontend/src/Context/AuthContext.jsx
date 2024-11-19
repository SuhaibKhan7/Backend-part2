import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [loginError, setLoginError] = useState(null);
  const [user, setUser] = useState({});
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const submitLogin = useEffect(async () => {
    try {
      const response = await postRequest(
        "auth/login",
        JSON.stringify(loginInfo)
      );
      if (response.error) {
        setLoginError(response);
      } else {
        localStorage.setItem("user", JSON.stringify(response));
        setUser(response);
        navigate("/");
      }
    } catch (error) {}
  }, [loginInfo]);

  return (
    <AuthContext.Provider
      value={{ loginInfo, setLoginInfo, loginError, user, submitLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
