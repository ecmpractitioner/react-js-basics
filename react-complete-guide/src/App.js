import React, { useState } from "react";
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";
import "./App.css";

const app = props => {
  const [currentState, updateUserNameState]=useState({ userName: "Manju" });


  const inputChanged = event => {
    updateUserNameState({ userName: event.target.value });
  };

  return (
    <div>
      <h1>First Assignment</h1>
      <UserInput
        changed={inputChanged}
        currentName={currentState.userName}
      ></UserInput>
      <UserOutput userName={currentState.userName}></UserOutput>
      <UserOutput userName={currentState.userName}></UserOutput>
    </div>
  );
};

export default app;
