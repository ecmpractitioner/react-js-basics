import React from 'react';
import PersonStyle from '../../css/Components/Person/Person.css';

const person = props=>{
    return(
        <div className='PersonStyle'>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Hobbies: {props.hobbies}</p>
        </div>
    );
};

export default person;