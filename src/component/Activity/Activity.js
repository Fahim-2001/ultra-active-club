import React from "react";
import "./Activity.css";

const Activity = (props) => {
  const { img, name, time } = props.activity;
  return (
    <div className="activity">
      <img src={img} alt="" />
      <div>
        <h3>{name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          similique laudantium facilis quae temporibus quo voluptatem, laborum
          minus quas
        </p>
        <p>
          <b>Time Duration : {time} hour</b>
        </p>
      </div>
      <div className="add-btn-container">
        <button className="add-to-list-btn">Add To List</button>
      </div>
    </div>
  );
};

export default Activity;
