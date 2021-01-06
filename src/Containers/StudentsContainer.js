
import StudentCard from '../Components/StudentCard.js'
import Form from "./Form.js";
import React, { Component } from 'react'

export default class StudentsContainer extends Component {
  render() {
    let student = this.props.students.map(studentObj => <StudentCard key={studentObj.id} studentObj={studentObj} clickHandler={this.props.clickHandler}/>)
    return (
      <div>
        <h1>Student's</h1>
             <Form/>
            {student}
    </div>
    )
  }
}


