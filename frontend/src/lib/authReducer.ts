const authReducer = () => {
  const initialState = {};

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "login":
        return action.payload.user;
      case "logout":
        return initialState;
      default:
        return state;
    }
  };

  return {
    initialState,
    reducer,
  };
};

export default authReducer();
