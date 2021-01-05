import React from "react";

function StudentCard({ studentObj, clickHandler }) {
  let studentClick = () => {
    return clickHandler(studentObj.id);
  };

//   let studentClicks = () => {
//     return removeHandler(studentObj.id);
//   };
  
  console.log(studentObj);

  return (
    <div className="student">
      <h2>{studentObj.name}</h2>
      <img className="img" src={studentObj.img} onClick={studentClick} />
    </div>
  );
}

export default StudentCard;
