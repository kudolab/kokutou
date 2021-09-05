import FirebaseFactory from "./Firebase";

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
      // onIdTokenChangedで取得できるしこっちはグルグル回すだけにしておこう
      await user.getIdToken(true);
    }
  }, 30 * 60 * 1000 /* 確かセッションの有効期限1時間だった気がする…expireみて計算すれば厳密だけど面倒なので決め打ち */);

  const login = (): Promise<string> =>
    FirebaseFactory.signInWithPopup()(
      FirebaseFactory.auth(),
      FirebaseFactory.loginProviders().google(),
    )
      .then((result) => {
        if (result.user === null) {
          throw new Error("login success, but user is null");
        }
        return result.user.uid;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        return "";
      });

  const logout = (): Promise<void> => FirebaseFactory.auth().signOut();

  const sessionToken = (): string | null => _sessionToken;

  const observeUid = (cb: (uid: string | null) => void) =>
    FirebaseFactory.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        cb(user.uid);
      } else {
        cb(null);
      }
    });

  return {
    login,
    logout,
    sessionToken,
    observeUid,
  };
};

export default Auth();
