import { createContext, useEffect, useState } from "react";
import { getRequest } from "../pages/services/service";

export const ChatContext=createContext()
export const ChatContextProvider=({children})=>{

const [userlist, setuserlist] = useState([]);
const [listError, setListError] = useState(null);
const [loading, setLoading] = useState(true);
const GetUserList = useEffect(() => {
  setLoading(true);
  const fetchlist = async () => {
    const response = await getRequest("/user");
    console.log(response);
    if (response.error) {
      setListError(response.message);
    } else {
      setuserlist(response);
      setLoading(false);
    }
  };
  fetchlist();
}, []);
    return(<ChatContext.Provider value={{}}> {children}</ChatContext.Provider>)
}
