import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";

import { AuthContext } from "../contexts/AuthContext";
import authReducer from "../lib/authReducer";
import { useEffect, useReducer } from "react";
import { listenAuthState } from "../lib/auth";

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(authReducer.reducer, authReducer.initialState);
  useEffect(() => {
    return listenAuthState(dispatch);
  }, []);

  return (
    <AuthContext.Provider value={state}>
      <Header />
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
