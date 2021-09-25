import { getFirebaseAdmin, init } from "next-firebase-auth";
import { cookieConfig, firebaseAdminConfig, firebaseConfig } from "../env";
import * as admin from "firebase-admin";

const initAuth = () => {
  init({
    authPageURL: "/auth",
    appPageURL: "/",
    loginAPIEndpoint: "/api/login", // required
    logoutAPIEndpoint: "/api/logout", // required
    firebaseAuthEmulatorHost: "localhost:9099",
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: firebaseAdminConfig.projectId,
        clientEmail: firebaseAdminConfig.clientEmail,
        // The private key must not be accesssible on the client side.
        privateKey: firebaseAdminConfig.privateKey,
      },
      databaseURL: firebaseConfig.databaseURL,
    },
    // firebaseClientInitConfig: {
    //   apiKey: firebaseConfig.apiKey, // required
    //   projectId: firebaseConfig.projectId,
    //   appId: firebaseConfig.appId,
    //   authDomain: firebaseConfig.authDomain,
    //   // TODO databaseURL?: string
    //   // "PROJECT_ID.appspot.com"
    //   storageBucket: firebaseConfig.storageBucket,
    //   messagingSenderId: firebaseConfig.messagingSenderId,
    //   measurementId: firebaseConfig.measurementId,
    // },
    firebaseClientInitConfig: { ...firebaseConfig },
    cookies: {
      name: "Kokutou", // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [cookieConfig.cookieSecretCurrent, cookieConfig.cookieSecretPrevious],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
  });
};

export default initAuth;
