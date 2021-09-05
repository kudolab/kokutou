import React from "react";

export const AuthContext = React.createContext<{
  uid: string | null;
  setUid: React.Dispatch<React.SetStateAction<string | null>>;
}>({
  uid: null,
  setUid: () => {},
});

export const AuthContextProvider: React.FC = ({ children }) => {
  const [uid, setUid] = React.useState<string | null>(null);
  return <AuthContext.Provider value={{ uid, setUid }}>{children}</AuthContext.Provider>;
};
