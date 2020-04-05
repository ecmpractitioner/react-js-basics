import React,{ useState } from "react";
import "./App.css";
import Person from "./Components/Person/Person";
import PersonRCE from "./Components/Person/PersonRCE";
import PersonDynamic from "./Components/Person/PersonDynamic";
import PersonWithState from "./Components/Person/PersonWithState";

const AppReactComponent = props => {
  const [originalState, setNewState] = useState({
    persons: [
      { name: "Manjunatha", age: 37 },
      { name: "Praveena", age: 35 },
      { name: "Vaishnav", age: 6 }
    ]
  });
  
  const switchNameHandler = ()=>{

    setNewState({
        persons:[
            {name:'Updated by button', age:37},
            {name:'Updated by button', age:35},
            {name:'Updated by button', age:6},
          ]
        });
     
  };
  
  
  const [otherState,setOtherState]=useState({someOtherValue: "Not changed"});
  console.log("state=============== "+JSON.stringify(originalState) + JSON.stringify(otherState));
  return (
    <div className="App">
      <h1> Hi, I 'm a functional react App with React Hooks to manage state</h1>
      <h2> I 'm h2</h2>
      <p>This is a paragrpah</p>
      <Person />
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
      <PersonDynamic props={{ name: "manju", age: "37" }}>
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
          name: originalState.persons[0].name,
          age: originalState.persons[0].age
        }}
      ></PersonWithState>
      <PersonWithState
        props={{
          name: originalState.persons[1].name,
          age: originalState.persons[1].age
        }}
      ></PersonWithState>
      <PersonWithState
        props={{
          name: originalState.persons[2].name,
          age: originalState.persons[2].age
        }}
      ></PersonWithState>
      <p>
        *********** Button to switch person created with state *****************
      </p>
      <button onClick={switchNameHandler}>Switch Name</button>
    </div>
  );
};

export default AppReactComponent;
