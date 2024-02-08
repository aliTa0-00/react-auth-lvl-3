import { createContext, useState } from "react";

export const User = createContext({});

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [auth, setauth] = useState({});
  return <User.Provider value={{ auth, setauth }}>{children}</User.Provider>;
};

export default UserProvider;
