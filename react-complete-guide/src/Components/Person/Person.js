import React from 'react';
const person=(props)=>{
    console.log("Simple Person");

    return <p onClick={props.click}>I'm a Person!</p>
}

export default person;