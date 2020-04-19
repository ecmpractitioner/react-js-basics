import React, { useState } from "react";
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";
import "./App.css";

const app = props => {
  const [currentState, updateState] = useState({
    userName: "Manju",
    showContent: false
  });

  const changeNameHandler = event => {
    updateState({
      ...currentState,
      userName: event.target.value,
      showContent: false
    });
  };

  const toggleContent = event => {
    
    updateState({
      ...currentState,
      showContent: !currentState.showContent
    });
  };

  return (
    <div>
      {!currentState.showContent ? (
        <UserOutput
          userName={currentState.userName}
          change={changeNameHandler}
        ></UserOutput>
      ) : null}

      <UserInput click={toggleContent}></UserInput>
    </div>
  );
};

export default app;
