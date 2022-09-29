import React from "react";
import "./Question.css";
const Question = () => {
  return (
    <div>
      <div>
        <h2>How Does React Works?</h2>
        <p>
          Ans : React creates a VIRTUAL DOM in memory. Instead of manipulating
          the browser's DOM directly, React creates a virtual DOM in memory,
          where it does all the necessary manipulating, before making the
          changes in the browser DOM.
        </p>
      </div>
    </div>
  );
};

export default Question;
