import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthContextProvide = ({ children }) => {

  const navigate = useNavigate();
  const [user, setUser] = useState({});
  
  const [loginError, setLoginError] = useState(null);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handlSubmit = async() => {
    const response = await postRequest("/auth/login", JSON.stringify(login));
    if (response.error) {
      setLoginError(response.message);
    } else {
      localStorage.setItem("user", JSON.stringify(response));
      setUser(response);
      navigate("/");
    }
  };

  return (
    <AuthContext.Provider value={{ login, setLogin ,handlSubmit,loginError,user}}>
      {children}{" "}
    </AuthContext.Provider>
  );
};
