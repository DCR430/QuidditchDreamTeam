// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import StudentsContainer from "./Containers/StudentsContainer.js";
import Quidditch from "./Containers/Quidditch.js";
import studentArray from "./api.js";

class App extends React.Component {
  state = {
    studentArray: studentArray,
  };

  clickHandler =(id)=> {
    let newArray = [...this.state.studentArray]
    let clickedStudent = newArray.find(student => student.id === id)
    clickedStudent.quidditch = true
    this.setState({
      studentArray:newArray
    })
    
  
  }
  
  
  render() {
    return (
      <div>
        <StudentsContainer students={this.state.studentArray} />
        <Quidditch students={this.state.studentArray} />
      </div>
    );
  }
}

export default App;
