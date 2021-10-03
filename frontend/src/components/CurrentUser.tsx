import React from "react";
import firebase from "firebase";

export const CurrentUser: React.VFC<{ user: firebase.User }> = ({ user }) => (
  <p>{user.displayName}</p>
);
