import React from "react";

function StudentCard({ studentObj, clickHandler,removeHandler }) {
  let studentClick = () => {
    return clickHandler(studentObj.id);
  };

  let studentClicks = () => {
    return removeHandler(studentObj.id);
  };
  
  console.log(studentObj);

  return (
    <div class="student">
      <h2 onClick={studentClicks}>{studentObj.name}</h2>
      <img class="img" src={studentObj.img} onClick={studentClick} />
    </div>
  );
}

export default StudentCard;
