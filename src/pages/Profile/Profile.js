import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Profile.module.scss";

function Profile() {
  const location = useLocation();
  const user = location?.state?.user;

  console.log(user);

  return <div></div>;
}

export default Profile;
