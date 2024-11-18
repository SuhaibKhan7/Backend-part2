import { Children, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../services/service";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const loginUser = useEffect(
    (url, body) => {
      const response = postRequest(url, body);
      if (response.error) {
        setError(response.error);
      } else {
        localStorage.setItem("User", JSON.stringify(response));
        setUser(response);
        navigate("/chat");
      }
    },
    [login]
  );

  return (
    <AuthContext.Provider value={{ user, login, setLogin }}>
      {Children}
    </AuthContext.Provider>
  );
};
