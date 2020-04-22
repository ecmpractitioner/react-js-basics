import React from "react";
import Persons from '../../css/Components/Person/Person.css';

const person = props => {
  return (
    <div  className='Persons'>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Hobbies : {props.hobbies}</p>
      <p><input type="text" onChange={props.change} value={props.name}></input></p>
      <p><button onClick={props.delete}>Delete</button></p>
      
    </div>
    
  );
};

export default person;
