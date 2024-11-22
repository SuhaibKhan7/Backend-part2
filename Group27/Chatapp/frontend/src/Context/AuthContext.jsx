import { useCallback, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../pages/services/service";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loginError, setLoginError] = useState(null);
  const [user, setUser] = useState(null);
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const submitLogin = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await postRequest(
          "auth/login",
          JSON.stringify(loginInfo)
        );
        console.log(">>>>>>>>>>>>>>>>");
        console.log(response);
        if (response.error) {
          setLoginError(response.message);
        } else {
          localStorage.setItem("user", JSON.stringify(response));
          setUser(response);
          navigate("/");
        }
      } catch (error) {}
    },
    [loginInfo]
  );

  const [logoutError, setLogoutError] = useState(null);

  const handleLogout = async (e) => {
    console.log("logout fun");
    const response = await postRequest("auth/logout");
    console.log("logout");
    console.log(response);
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{
        loginInfo,
        setLoginInfo,
        loginError,
        user,
        submitLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
