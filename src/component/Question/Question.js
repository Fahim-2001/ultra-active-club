import React from "react";
import "./Question.css";
const Question = () => {
  return (
    <div className="questions">
      <div>
        <h2>How Does React Works?</h2>
        <p>
          Ans : React creates a VIRTUAL DOM in memory. Instead of manipulating
          the browser's DOM directly, React creates a virtual DOM in memory,
          where it does all the necessary manipulating, before making the
          changes in the browser DOM.
        </p>
      </div>
      <div>
        <h2>What is the difference between props and state?</h2>
        <p>
          Ans : Props - Data passed one to another component. It cannot be
          modified. Props are read only State - Data pass within the component
          only. It can be modified. State is both read and write.
        </p>
      </div>
      <div>
        <h2>
          How many actions can be done by useEffect hook except fetching data?
        </h2>
        <p>
          Ans : You might have a situation where you need to add event listener
          during the initial mount and clean them up at unmount and another case
          where a particular listener needs to be cleaned up and re-added on a
          prop change. You need separate side-effect for different sets of
          changes. In such a case, separate out relevant side effects into
          different useEffects.
        </p>
      </div>
    </div>
  );
};

export default Question;
