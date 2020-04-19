import React from "react";

const userOutput = props => {
  return (
    <div>
      <input type="text" onChange={props.change} value={props.userName}></input>
      <p>User Name : {props.userName}</p>
    </div>
  );
};

export default userOutput;
