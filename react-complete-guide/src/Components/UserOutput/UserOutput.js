import React from "react";
import '../../css/Components/UserOutput/UserOutput.css'
const userOutput = (props) => {
  return (
    <div className='UserOutput'>
      <p>User Name: {props.userName}</p>
      <p>This will be overwritten</p>
     
    </div>
  );
};

export default userOutput;
