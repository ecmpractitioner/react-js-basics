import React from 'react';
import '../../css/Components/UserInput/UserInput.css';
const userInput =(props)=>{

    return(
        <div className='UserInput'><input type="text" onChange={props.changed} value={props.currentName}></input></div>
   );
};

export default userInput;