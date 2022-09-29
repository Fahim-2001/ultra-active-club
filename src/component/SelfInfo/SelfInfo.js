import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SelfInfo.css";

const SelfInfo = () => {
  return (
    <div className="self-info">
      <div className="profile-and-location">
        <img
          src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <div className="self-location">
          <h3>Amir Khan</h3>
          <p>
            <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon> Dhaka,
            Bangladesh
          </p>
        </div>
      </div>
      <div className="personal-info">
        <p>
          69 <small>kg</small>
        </p>
        <p>5'11"</p>
        <p>
          21<small>yrs</small>
        </p>
      </div>
    </div>
  );
};

export default SelfInfo;
