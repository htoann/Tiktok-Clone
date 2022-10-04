import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Profile.module.scss";
import { axios } from "axios";

function Profile() {
  const [user, setUser] = useState({});
  const location = useLocation();
  // setUser(location?.state?.user);

  console.log(location.pathname.slice(2));

  return <div></div>;
}

export default Profile;
