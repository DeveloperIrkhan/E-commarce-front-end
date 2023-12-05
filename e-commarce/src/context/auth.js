import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
//creating context var
const authContext = createContext();
// to accecss setauth and auth for anywhere in application
const AuthProvider = ({ children }) => {
  //creating state var for user & token
  const [auth, setauth] = useState({
    user: null,
    token: "",
  });

  // default headers setting
   axios.defaults.headers.common["Authorization"] = auth?.token;

  // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setauth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <authContext.Provider value={[auth, setauth]}>
      {children}
    </authContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
