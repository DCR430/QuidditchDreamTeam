
import StudentCard from '../Components/StudentCard.js'
import Form from "./Form.js";
import React, { Component } from 'react'
import studentArray from '../api.js';

export default class StudentsContainer extends Component {

  state={
    students : studentArray
}

submitHandler =(obj)=>{
let newArray =[...this.state.students, obj]
this.setState({ students: newArray})

}
  render() {
    let student = this.props.students.map(studentObj => <StudentCard key={studentObj.id} studentObj={studentObj} clickHandler={this.props.clickHandler}/>)
    return (
      <div>
        <h1>Student's</h1>
             <Form submitHandler={this.submitHandler} onChange={this.props.onChange}/>
            {student}
    </div>
    )
  }
}


