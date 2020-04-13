import React from 'react';
import Person from '../../css/Components/Person/Person.css';

const personWithState=props=>{
    console.log("State Person "+props);
  return (
    <div className="Person">
      <p>Name : {props.props.name}</p>
      <p>Your age: {props.props.age}</p>
      Hobbie: {props.children}
      <p><input type="text" onChange={props.props.changed} value={props.props.name}></input></p>
    </div>
  );
};

export default personWithState;