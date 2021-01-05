// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import StudentsContainer from "./Containers/StudentsContainer.js";
import Quidditch from "./Containers/Quidditch.js";
import studentArray from "./api.js";
import Header from "./Components/Header.js";
import Form from "./Containers/Form";

class App extends React.Component {
  state = {
    studentArray: studentArray,
  };

  clickHandler = (id) => {
    let newArray = [...this.state.studentArray];
    let clickedStudent = newArray.find((student) => student.id === id);
    clickedStudent.quidditch = true;
    this.setState({
      studentArray: newArray,
    });
  };

  removeHandler = (id) => {
    let newArray = [...this.state.studentArray];
    let clickedStudent = newArray.find((student) => student.id === id);
    clickedStudent.quidditch = false;
    this.setState({
      studentArray: newArray,
    });
  };

  quidditchTeam = () => {
   return this.state.studentArray.filter((student) => student.quidditch === true);
  
  };

  render() {
    console.log("CONSOLE",this.quidditchTeam())
    return (
      <div>
        <Header/>
       
        <StudentsContainer
          students={this.state.studentArray}
          clickHandler={this.clickHandler}
        />
        <Quidditch students={this.state.studentArray} 
        quidditchTeam={this.quidditchTeam()}
        clickHandler={this.removeHandler}/>
      </div>
    );
  }
}

export default App;
