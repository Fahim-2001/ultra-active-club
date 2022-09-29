import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import PogramDetails from "../ProgramDetails/PogramDetails";

import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((json) => setActivities(json));
  }, []);

  const [activitiesObject, setActivitiesObject] = useState([]);

  const addToList = (activity) => {
    // console.log(activity);
    const newTime = [...activitiesObject, activity];
    setActivitiesObject(newTime);
  };

  return (
    <div className="activities-container">
      <div className="activities">
        {activities.map((activity) => (
          <Activity
            key={activity.id}
            activity={activity}
            addToList={addToList}
          ></Activity>
        ))}
      </div>
      <div>
        <PogramDetails activitiesObject={activitiesObject}></PogramDetails>
      </div>
    </div>
  );
};

export default Activities;
