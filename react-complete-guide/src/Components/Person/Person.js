import React from "react";
import Persons from '../../css/Components/Person/Person.css';

const person = props => {
  return (
    <div  className='Persons'>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Hobbies : {props.hobbies}</p>
      
    </div>
    
  );
};

export default person;
