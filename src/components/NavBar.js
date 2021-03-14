import React from "react";

import User from "./User";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <div className="container-logo">
        <Link to="/">
          <img src="/assets/logo.svg" alt="" />
        </Link>
      </div>

      <User />
    </header>
  );
};

export default NavBar;
