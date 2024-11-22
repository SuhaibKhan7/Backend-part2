import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import postRequest from "../services/service.jsx";
export const AuthContext = createContext();

export const AuthContextProvide = ({ children }) => {
  const [user, setUser] = useState({});
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("inside submit fn");
    const response = await postRequest("auth/login", JSON.stringify(login));
    if (response.error) {
      // set error
      setLoginError(response.message);
    } else {
      localStorage.setItem("user", JSON.stringify(response));
      setUser(response);
      // redirect chat
      navigate("/");
    }
  };

  return (
    <AuthContext.Provider
      value={{ login, setLogin, handleSubmit, loginError, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
