import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1 className="site-name">
        <FontAwesomeIcon icon={faBook}></FontAwesomeIcon> Productivity-Club
      </h1>
    </div>
  );
};

export default Header;
