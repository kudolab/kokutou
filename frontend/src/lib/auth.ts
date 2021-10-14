import firebase from "firebase/app";
import FirebaseFactory from "./firebase";

const Auth = () => {
  let _sessionToken: string | null = null;

  // Disposable...
  FirebaseFactory.auth().onIdTokenChanged((user) => {
    if (user !== null) {
      user.getIdToken().then((token) => (_sessionToken = token));
    } else {
      _sessionToken = null;
    }
  });

  // Disposable...
  setInterval(async () => {
    const user = FirebaseFactory.auth().currentUser;

    if (user !== null) {
      await user.getIdToken(true);
    }
  }, 30 * 60 * 1000);

  const login = () => {
    console.log("login");
    FirebaseFactory.auth()
      .signInWithPopup(FirebaseFactory.loginProviders().google)
      .then((f) => {
        console.log("f");
        console.log(f.credential);
        console.dir(f);
        if (f.user === null) {
          console.log("user null");
          throw new Error("login success, but user is null");
        }
        console.log(f.user);
        return f.user.uid;
      })
      .catch((error) => {
        console.debug(error);
        // throw new Error("login faild");
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        return "";
      });
    //FirebaseFactory.auth()
    //  .getRedirectResult()
    //  .then((result) => {
    //    if (result.credential) {
    //      /** @type {firebase.auth.OAuthCredential} */
    //      var credential = result.credential;

    //      // This gives you a Google Access Token. You can use it to access the Google API.
    //      // var token = credential.accessToken;
    //      const idToken = (credential as firebase.auth.OAuthCredential).idToken;
    //      const accessToken = (credential as firebase.auth.OAuthCredential).accessToken;
    //      console.log(idToken);
    //      console.log(accessToken);
    //      // ...
    //    }
    //    // The signed-in user info.
    //    var user = result.user;
    //  }).catch((error) => {
    //  // Handle Errors here.
    //  var errorCode = error.code;
    //  var errorMessage = error.message;
    //  // The email of the user's account used.
    //  var email = error.email;
    //  // The firebase.auth.AuthCredential type that was used.
    //  var credential = error.credential;
    //  // ...
    //});
  };

  const logout = (): Promise<void> =>
    FirebaseFactory.auth()
      .signOut()
      .then(() => window.location.reload());

  const sessionToken = (): string | null => _sessionToken;

  const observeUid = (cb: (uid: string | null) => void) =>
    FirebaseFactory.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        cb(user.uid);
      } else {
        cb(null);
      }
    });

  const listenAuthState = (dispatch: any) => {
    console.log("dispatch");
    return FirebaseFactory.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.debug("user");
        console.debug(user);
        dispatch({
          type: "login",
          payload: {
            user,
          },
        });
      } else {
        dispatch({
          type: "logout",
        });
      }
    });
  };

  const currentUser = (): firebase.User | null => FirebaseFactory.auth().currentUser;

  return {
    login,
    logout,
    sessionToken,
    observeUid,
    listenAuthState,
    currentUser,
  };
};

export default Auth();
