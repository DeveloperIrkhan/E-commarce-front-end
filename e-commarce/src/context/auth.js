import { useState, useEffect, useContext, createContext } from "react";

//creating context var
const authContext = createContext();
// to accecss setauth and auth for anywhere in application
const AuthProvider = ({ children }) => {
  //creating state var for user & token
  const [auth, setauth] = useState({
    user: null,
    token: "",
  });
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
  }, [auth]);
  return (
    <authContext.Provider value={[auth, setauth]}>
      {children}
    </authContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
