import React from 'react';

const personWithState=props=>{
    console.log("State Person "+props);
  return (
    <div>
      <p>Name : {props.props.name}</p>
      <p>Your age: {props.props.age}</p>
      Hobbie: {props.children}
    </div>
  );
};

export default personWithState;