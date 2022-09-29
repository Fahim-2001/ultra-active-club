import React from "react";
import "./ProgramDetails.css";
const PogramDetails = () => {
  return (
    <div>
      <h2>Add a break</h2>
      <div className="break-time">
        <p>10min</p>
        <p>15min</p>
        <p>30min</p>
        <p>45min</p>
        <p>60min</p>
      </div>
      <div>
        <h2>Exercise Details</h2>
        <div className="exercise-time">
          <p>Exercise Time </p>
          <p className="time">00 hours</p>
        </div>
        <div className="break-duration">
          <p>Break Time </p>
          <p className="time">00 min</p>
        </div>
      </div>
      <div>
        <button className="activity-btn">Activity Completed</button>
      </div>
    </div>
  );
};
export default PogramDetails;
