import React, { Component } from "react";
import "./App.css";
import PersonWithState from "./Components/Person/PersonWithState";
import Button from './css/Common/Button.css'
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
  
  nameChangedHandler=(event)=>{

      this.setState({
        persons: [
          { name: event.target.value, age: 37 },
          { name: "Praveena", age: 35 },
          { name: "Vaishnav", age: 6 }
        ]
      });
  };
  render() {

    const buttonStyle={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
      
    };
    return (
      <div className="App">
        <h1> Hi, I 'm a react App with class</h1>
        <p>*********** Person created with state *****************</p>
        <PersonWithState
          props={{
            name: this.state.persons[0].name,
            age: this.state.persons[0].age,
            changed:this.nameChangedHandler
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
        <p><button style={buttonStyle} onClick={this.switchNameHandler}>Switch Name</button></p>
        <p><strong>Try to use this option to pass values</strong></p>
        <p><button className='Button'onClick={this.switchNameHandlerWithData.bind(this,'Name with bind')}>Switch Name Bind</button></p>
        <p><button className='Button' onClick={()=>this.switchNameHandlerWithData("One more way")}>Another way</button></p>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\'m a React App!!!'));
  }
}

export default App;
