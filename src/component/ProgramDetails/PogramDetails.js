import React, { useState } from "react";
import "./ProgramDetails.css";
const PogramDetails = (props) => {
  const { activitiesObject } = props;
  let totalTime = 0;
  for (const activity of activitiesObject) {
    console.log(activity);
    totalTime = totalTime + activity.time;
  }

  const breakTime = [
    { id: 1, breakTime: 10 },
    { id: 2, breakTime: 15 },
    { id: 3, breakTime: 30 },
    { id: 4, breakTime: 45 },
    { id: 5, breakTime: 60 },
  ];
  const [times, setTimes] = useState([]);

  // let newBreakTime;
  const addBreakTime = (breaktime) => {
    // console.log(breaktime);
    const newBreakTime = [times, breaktime];

    // console.log(newBreakTime);
    setTimes(newBreakTime);
  };
  console.log(times.breakTime);
  // const setBreakTime = newBreakTime;
  return (
    <div>
      <h2>Add a break</h2>
      <div className="break-time">
        {breakTime.map((time) => (
          <button key={time.id} onClick={() => addBreakTime(time)}>
            {time.breakTime}min
          </button>
        ))}
      </div>
      <div>
        <h2>Exercise Details</h2>
        <div className="exercise-time">
          <p>Exercise Time </p>
          <p className="time">{totalTime} hours</p>
        </div>
        <div className="break-duration">
          <p>Break Time </p>
          <p className="time">{}min</p>
        </div>
      </div>
      <div>
        <button className="activity-btn">Activity Completed</button>
      </div>
    </div>
  );
};
export default PogramDetails;
