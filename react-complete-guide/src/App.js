import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person/Person";
import ButtonStyle from "./css/Common/Button.css";

class App extends Component {
  state = {
    Persons: [
      { id: "1", name: "Manju", age: "37", hobbies: "Cricket" },
      { id: "2", name: "Praveena", age: "33", hobbies: "Cook" },
      { id: "3", name: "Vaishnav", age: "07", hobbies: "Playing" }
    ],
    showContent: false,
    buttonTitle: "Show Content"
  };

  nameChangeNameHandler = (event, index) => {
    //this is bad way of changing or updating the state. NEVER DO THIS WAY
    //const oldPersons = this.state.Persons;
    const oldPersons=[...this.state.Persons];
    oldPersons[index].name = event.target.value;

    this.setState({
      Persons: oldPersons
    });
  };
  toggleNames = event => {
    this.setState({
      showContent: !this.state.showContent,
      buttonTitle: !this.state.showContent ? "Hide Content" : "Show Content"
    });
  };

  deletePersonComponent=(index)=>{
   
    const deletePerson = [... this.state.Persons];
    deletePerson.splice(index,1);
    this.setState({Persons:deletePerson});
  }
  render() {
    let dynamicPersonsContent = null;
    if (this.state.showContent) {
      dynamicPersonsContent = (
        <div>
          {this.state.Persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                hobbies={person.hobbies}
                change={event => this.nameChangeNameHandler(event, index)}
                delete={(event)=>{this.deletePersonComponent(index)}}
                key={person.id}
              ></Person>
            );
          })}
        </div>
      );
    }

    return (
      
      <div className="App">
        <div>
        <p>When rendering lists, always use key.</p>
      </div>
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
