import { createContext } from "react";

export const AuthContext = createContext();




  return <AuthContext.Provider value={123}>{children} </AuthContext.Provider>;
};
