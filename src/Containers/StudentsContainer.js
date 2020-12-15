import React from "react";
import StudentCard from '../Components/StudentCard.js'

function StudentsContainer({students,clickHandler}) {
  let student = students.map(studentObj => <StudentCard key={studentObj.id} studentObj={studentObj} clickHandler={clickHandler}/>)
  return(
      <>
      <h1>Student's</h1>
      {student}
      </>

  )
}

export default StudentsContainer;
