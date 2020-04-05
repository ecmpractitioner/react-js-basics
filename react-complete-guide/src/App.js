import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person/Person";
import PersonRCE from "./Components/Person/PersonRCE";
import PersonDynamic from "./Components/Person/PersonDynamic";
import PersonWithState from "./Components/Person/PersonWithState";
class App extends Component {
  state = {
    persons: [
      { name: "Manjunatha", age: 37 },
      { name: "Praveena", age: 35 },
      { name: "Vaishnav", age: 6 }
    ],
    someOtherValue: "Not changed"
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Updated by button", age: 37 },
        { name: "Praveena", age: 35 },
        { name: "Vaishnav", age: 6 }
      ]
    });

    console.log("State after update " + this.state);
  };

  switchNameHandlerWithData = newName => {
    this.setState({
      persons: [
        { name: newName, age: 37 },
        { name: "Praveena", age: 35 },
        { name: "Vaishnav", age: 6 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1> Hi, I 'm a react App with class</h1>
        <h2> I 'm h2</h2>
        <p>This is a paragrpah</p>
        <Person click={this.switchNameHandler} />
        <Person />
        <h1>
          <Person />
        </h1>
        <div>
          <Person />
        </div>
        <PersonRCE myProps="I'm a Person using React.CreateElement" />
        {/* </div><PersonDynamic name="Manju" age="37"/> */}
        <p>*********** Person created dynamically *****************</p>
        <PersonDynamic
          props={{ name: "manju", age: "37", click: this.switchNameHandler }}
        >
          I like playing Cricket
        </PersonDynamic>
        <PersonDynamic props={{ name: "Praveena", age: "35" }}>
          <Person />
        </PersonDynamic>
        <PersonDynamic props={{ name: "Vaishnav", age: "06" }}>
          <p>I like cars</p>
        </PersonDynamic>
        <p>*********** Person created with state *****************</p>
        <PersonWithState
          props={{
            name: this.state.persons[0].name,
            age: this.state.persons[0].age
          }}
        ></PersonWithState>
        <PersonWithState
          props={{
            name: this.state.persons[1].name,
            age: this.state.persons[1].age
          }}
        ></PersonWithState>
        <PersonWithState
          props={{
            name: this.state.persons[2].name,
            age: this.state.persons[2].age
          }}
        ></PersonWithState>
        <p>
          *********** Button to switch person created with state
          *****************
        </p>
        <p><button onClick={this.switchNameHandler}>Switch Name</button></p>
        <p><strong>Try to use this option to pass values</strong></p>
        <p><button onClick={this.switchNameHandlerWithData.bind(this,'Name with bind')}>Switch Name Bind</button></p>
        <p><button onClick={()=>this.switchNameHandlerWithData("One more way")}>Another way</button></p>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\'m a React App!!!'));
  }
}

export default App;
