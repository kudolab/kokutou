export const API_HOST = process.env.API_HOST;

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const firebaseAdminConfig = (() => {
  // let privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY;
  // console.log(privateKey);
  // if (privateKey !== null) {
  //   privateKey = privateKey.replace(/\\n/g, "\n");
  // }
  console.log(process.env.FIREBASE_ADMIN_PRIVATE_KEY);
  console.log(process.env.FIREBASE_ADMIN_PRIVATE_KEY || "xssx");
  console.log("privateKey", (process.env.FIREBASE_ADMIN_PRIVATE_KEY || "fa").replace(/\\n/g, "\n"));
  const private_key = (process.env.FIREBASE_ADMIN_PRIVATE_KEY || "fa").replace(/\n/g, "\n");
  console.log("privateKey", private_key);
  console.log("privateKey", String.raw`${private_key}`);
  const private_key_no_replace = process.env.FIREBASE_ADMIN_PRIVATE_KEY || "fa";
  console.log("private_key_no_replace", private_key_no_replace);
  console.log("private_key === private_key_no_replace", private_key === private_key_no_replace);
  // console.log("privateKey no replace", process.env.FIREBASE_ADMIN_PRIVATE_KEY || "fa");
  return {
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    // privateKey: (process.env.FIREBASE_ADMIN_PRIVATE_KEY || "aa"),
    privateKey: (process.env.FIREBASE_ADMIN_PRIVATE_KEY || "aa").replace(/\n/g, "\n"),
    // ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
    // : undefined,
  };
})();

export const firebaseAuthConfig = {
  emulatorHost: process.env.FIREBASE_AUTH_EMULATOR_HOST,
};

export const cookieConfig = {
  cookieSecretCurrent: process.env.COOKIE_SECRET_CURRENT,
  cookieSecretPrevious: process.env.COOKIE_SECRET_PREVIOUS,
};
