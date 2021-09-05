import { firebaseConfig } from "../env";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const Firebase = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  return {
    analytics() {
      return analytics;
    },
    auth() {
      return auth;
    },
    loginProviders() {
      return {
        google(){
          return new GoogleAuthProvider().addScope("https://www.googleapis.com/auth/contacts.readonly");
        }
      };
    },
    signInWithPopup(){
      return signInWithPopup
    }
  };
};

export default Firebase();
