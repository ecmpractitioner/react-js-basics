import React, { Component } from "react";
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";
import "./App.css";


class App extends Component {
  state = {
    userName: "Manju"
  };

  inputChanged=(event)=>{
    this.setState({ userName:event.target.value});
  };
  render() {
    return (
      <div>
        <h1>First Assignment</h1>
        <UserInput  changed={this.inputChanged} currentName={this.state.userName}></UserInput>
        <UserOutput userName={this.state.userName}></UserOutput>
        <UserOutput userName={this.state.userName}></UserOutput>
      </div>
    );
  }
}

export default App;
