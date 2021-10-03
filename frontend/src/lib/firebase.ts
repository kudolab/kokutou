import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../env";

const FirebaseFactory = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  // https://firebase.google.com/docs/auth/web/start
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const auth = firebase.auth();
  return {
    auth() {
      return auth;
    },
    loginProviders() {
      return {
        google: googleProvider,
      };
    },
  };
};

export default FirebaseFactory();
