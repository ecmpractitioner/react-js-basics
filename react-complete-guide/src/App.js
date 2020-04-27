import React, { useState } from "react";
import "./App.css";
import Person from "./Components/Person/Person.js";

const App = props => {
  const [currentState, updatePersonState] = useState({
    Persons: [
      { id: "1", name: "Manju", age: "37", hobbies: "Cricket" },
      { id: "2", name: "Praveena", age: "33", hobbies: "Cook" },
      { id: "3", name: "Vaishnav", age: "07", hobbies: "Reading" }
    ],
    showContent: true,
    buttonText: "Hide Content"
  });
  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  let persons = "";
  if (currentState.showContent) {
    persons = currentState.Persons.map((person, index) => (
      <div key={person.id}>
        <Person
          name={person.name}
          age={person.age}
          hobbies={person.hobbies}
        ></Person>
      </div>
    ));
    buttonStyle.backgroundColor = "red";
  }

  const toggleHandler = (event, index) => {
    const showContentNow = currentState.showContent;
    updatePersonState({
      ...currentState,
      showContent: !showContentNow,
      buttonText: currentState.showContent ? "Show Content" : "Hide Content"
    });
  };
  const changeStyle=[];
  if(!currentState.showContent){
    changeStyle.push('changeColor');
    changeStyle.push('changeFontWeight');
  }
  return (
    <div className="App">
      <h1>Styling Components Dynamically</h1>
      <h2 className={changeStyle.join(' ')}>The color of this text changes Dynamically</h2>
      <div>
        <button onClick={toggleHandler} style={buttonStyle}>
          {currentState.buttonText}
        </button>
      </div>
      <div> {persons}</div>
    </div>
  );
};
export default App;
