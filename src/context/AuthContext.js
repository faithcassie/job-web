import React, { createContext, useState } from "react";

export const authContext = createContext();

function AuthContext({ children }) {
  const [user, setUser] = useState({ name: "" });
  const logIn = (name) => {
    setUser({ name });
  };
  const logOut = () => {
    setUser({ name: "" });
  };
  const style = {
    position: "relative",
    margin: "auto",
    marginTop: 20,
    width: { xs: 300, sm: 400, md: 500 },
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    padding: 4,
    paddingBottom: 6,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const value = { user, logIn, logOut, style };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;
