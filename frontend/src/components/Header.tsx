import React from "react";
import { AuthContext } from "../contexts/AuthContext";
// import AuthService from "../lib/Auth";

export const Header: React.VFC = () => {
  const authContext = React.useContext(AuthContext);
  React.useEffect(() => {
    // AuthService.observeUid((maybeUid) => {
    //   authContext.setUid(maybeUid);
    // });
  }, []);

  return (
    <header>
      <h1 className="appname-h1">{"Kokutou"}</h1>
      {/*{authContext.uid === null ? (*/}
      {/*  <button className={"login-button"} onClick={() => AuthService.login()}>*/}
      {/*    ログイン*/}
      {/*  </button>*/}
      {/*) : (*/}
      {/*  <button className={"login-button"} onClick={() => AuthService.logout()}>*/}
      {/*    ログアウト*/}
      {/*  </button>*/}
      {/*)}*/}
    </header>
  );
};
