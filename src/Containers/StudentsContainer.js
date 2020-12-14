import React from "react";
import StudentCard from '../Components/StudentCard.js'

function StudentsContainer({students}) {
  let student = students.map(studentObj => <StudentCard studentObj={studentObj}/>)
  return(
      <>
      <h2> Hogwart's Finest!💫  </h2>
      {student}
      </>

  )
}

export default StudentsContainer;
