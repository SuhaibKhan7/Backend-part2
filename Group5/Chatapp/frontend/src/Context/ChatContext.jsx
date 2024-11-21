import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
export const ChatContext = createContext();
export const ChatContextProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);

  const getUserList = useEffect(() => {
    const fetchlist = () => {
      const resposne = getRequest("users");


    };

    fetchlist();
  }, []);

  return <ChatContext.Provider value={{}}> {children}</ChatContext.Provider>;
};
