const authReducer = () => {
  const initialState = {};

  const reducer = (state: any, action: any) => {
    console.log("reducer");
    console.dir(state);
    switch (action.type) {
      case "login":
        return action.payload.user;
      case "logout":
        return initialState;
      default:
        console.debug("state:", state);
        return state;
    }
  };

  return {
    initialState,
    reducer,
  };
};

export default authReducer();
