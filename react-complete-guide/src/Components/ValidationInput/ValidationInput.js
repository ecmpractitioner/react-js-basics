import React from "react";

const validationInput = props => {
  let value = props.inputTextLength > 5 ? "Long Text" : "Short Text";
  return <p>Text Length : {value}</p>;
};

export default validationInput;
