import React from "react";
import firebase from "firebase/app";

export const CurrentUser: React.VFC<{ user: firebase.User }> = ({ user }) => (
  <p>{user.displayName}</p>
);
