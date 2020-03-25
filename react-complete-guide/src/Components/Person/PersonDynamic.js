import React from "react";

const dynamicPerson = props => {

    console.log("Dynamic Person");
   return (
    <div>
      <p>Name : {props.props.name}</p>
      <p>Your age: {props.props.age}</p>
      Hobbie: {props.children}
    </div>
  );
};

export default dynamicPerson;
