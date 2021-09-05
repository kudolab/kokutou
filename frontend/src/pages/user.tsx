import React from "react";
import { NeedLogin } from "../components/NeedLogin";
import { AuthContext } from "../contexts/AuthContext";

export const User: React.VFC = () => {
  const authContext = React.useContext(AuthContext);
  if (authContext.uid === null) {
    return <NeedLogin />;
  }
  return <div>user page</div>;
};
