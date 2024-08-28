import React from "react";
import { Link } from "react-router-dom";
import styles from "../scss/Header.module.scss";
import { getRoleFromCookie } from "../helpers/getToken";
const Header = () => {
  const role=getRoleFromCookie();
  const logout=()=>{
    document.cookie="authToken=";
    document.cookie="role=";
    window.location="/";
  }
  return (
    <div className={styles.header}>
      <div>
      <Link to="/">Home</Link>
      </div>
      <div>

        {role&&role.length>0?<button onClick={logout}>Logout</button>:<Link to="/login">Login/Signup</Link>}
        
      </div>
    </div>
  );
};

export default Header;
