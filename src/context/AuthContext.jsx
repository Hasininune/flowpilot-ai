import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("flowpilot-user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = () => {
    const account = JSON.parse(
      localStorage.getItem("flowpilot-account")
    );

    if (!account) return;

    setUser(account);

    localStorage.setItem(
      "flowpilot-user",
      JSON.stringify(account)
    );
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("flowpilot-user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);