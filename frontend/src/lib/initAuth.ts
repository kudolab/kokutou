import { getFirebaseAdmin, init } from "next-firebase-auth";
import { cookieConfig, firebaseAdminConfig, firebaseAuthConfig, firebaseConfig } from "../env";
import * as admin from "firebase-admin";

const TWELVE_DAYS_IN_MS = 12 * 60 * 60 * 24 * 1000;

const initAuth = () => {
  console.log(firebaseConfig);
  init({
    authPageURL: "/auth",
    appPageURL: "/",
    loginAPIEndpoint: "/api/login", // required
    logoutAPIEndpoint: "/api/logout", // required
    firebaseAuthEmulatorHost: firebaseAuthConfig.emulatorHost,
    firebaseAdminInitConfig: {
      credential: {
        projectId: firebaseAdminConfig.projectId,
        clientEmail: firebaseAdminConfig.clientEmail,
        privateKey: firebaseAdminConfig.privateKey,
      },
      databaseURL: firebaseConfig.databaseURL,
    },
    firebaseClientInitConfig: { ...firebaseConfig },
    cookies: {
      name: "Kokutou", // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [cookieConfig.cookieSecretCurrent, cookieConfig.cookieSecretPrevious],
      httpOnly: true,
      maxAge: TWELVE_DAYS_IN_MS,
      overwrite: true,
      path: "/",
      sameSite: "strict",
      // secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
  });
};

export default initAuth;