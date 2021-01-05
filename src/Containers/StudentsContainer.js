import React from "react";
import StudentCard from '../Components/StudentCard.js'
import Form from "./Form.js";

function StudentsContainer({students,clickHandler}) {
  let student = students.map(studentObj => <StudentCard key={studentObj.id} studentObj={studentObj} clickHandler={clickHandler}/>)
  return(
      <>
      <h1>Student's</h1>
      <Form/>
      {student}
      </>

  )
}

export default StudentsContainer;
