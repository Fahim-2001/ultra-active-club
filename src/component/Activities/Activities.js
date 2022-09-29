import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";

import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((json) => setActivities(json));
  }, []);
  return (
    <div className="activities">
      {activities.map((activity) => (
        <Activity key={activity.id} activity={activity}></Activity>
      ))}
    </div>
  );
};

export default Activities;
