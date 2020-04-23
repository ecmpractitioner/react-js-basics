import React, { Component } from "react";
import "./App.css";
import ValidationInput from "./Components/ValidationInput/ValidationInput.js";
import Char from "./Components/Char/Char.js";

class App extends Component {
  state = {
    inputText: ""
  };

  renderText = event => {
    let inputText = this.state.inputText;
    inputText = event.target.value;

    this.setState({ inputText: (inputText = event.target.value) });
  };

  removeChar = (event,index)=>{
    const charToRemove =this.state.inputText.split('');
    charToRemove.splice(index,1);
    this.setState({inputText:charToRemove.join('')});
  };
  render() {
    //const charComponent=this.state.inputText.split('').map((ch, index)=>{
    //return <Char key = {index}char={ch}></Char>
    //});
    const charComponent = (
      <div>
        {this.state.inputText.split("").map((ch, index) => {
          return <Char click = {(event)=>this.removeChar(event,index)} key={index} char={ch}></Char>;
        })}
      </div>
    );

    return (
      <div className="App">
        <div>Assignment-2: Dynamic Lists with Condition</div>
        <br />
        <div>
          <label>
            Input: <input type="text" onChange={this.renderText} value={this.state.inputText} />
          </label>
        </div>
        <p>Entered Text : {this.state.inputText}</p>
        <ValidationInput
          inputTextLength={this.state.inputText.length}
        ></ValidationInput>
        {charComponent}
      </div>
    );
  }
}

export default App;
