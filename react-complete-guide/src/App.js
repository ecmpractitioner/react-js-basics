import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person/Person";
import ButtonStyle from "./css/Common/Button.css";

class App extends Component {
  state = {
    Persons: [
      { name: "Manju", age: "37", hobbies: "Cricket" },
      { name: "Praveena", age: "33", hobbies: "Cook" },
      { name: "Manju", age: "07", hobbies: "Playing" }
    ],
    showContent: false,
    buttonTitle:'Show Content'
  };

  toggleNames = event => {
    this.setState(
      { 
        showContent: !this.state.showContent,
        buttonTitle:!this.state.showContent? 'Hide Content':'Show Content'
      }
      );
  };
  render() {
    let dynamicPersonsContent = null;
    if (this.state.showContent) {
      dynamicPersonsContent = (
        <div>
          <Person
            name={this.state.Persons[0].name}
            age={this.state.Persons[0].age}
            hobbies={this.state.Persons[0].hobbies}
          ></Person>
          <Person
            name={this.state.Persons[1].name}
            age={this.state.Persons[1].age}
            hobbies={this.state.Persons[1].hobbies}
          ></Person>
          <Person
            name={this.state.Persons[2].name}
            age={this.state.Persons[2].age}
            hobbies={this.state.Persons[2].hobbies}
          ></Person>
        </div>
      );
    }

    return (
      <div className="App">
        <div>
          <button className="ButtonStyle" onClick={this.toggleNames}>
            {this.state.buttonTitle}
          </button>
          {dynamicPersonsContent}
        </div>
      </div>
    );
  }
}

export default App;
