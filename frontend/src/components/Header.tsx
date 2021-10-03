import React from "react";
import auth from "../lib/auth";

// type HeaderProps = {
//   authState: any;
// };

export const Header: React.VFC = (props) => {
  // console.debug("in header props json: ", JSON.stringify(props));
  console.debug("in header state: ", props);

  return (
    <header>
      <h1 className="appname-h1">{"Kokutou"}</h1>
      {/*{props}*/}
      {props ? (
        <button className={"login-button"} onClick={() => auth.login()}>
          ログイン
        </button>
      ) : (
        <button className={"login-button"} onClick={() => auth.logout()}>
          ログアウト
        </button>
      )}
    </header>
  );
};
