import React from 'react';
const personRCE=(props)=>{
    console.log("RCE Person");

    return React.createElement('p',null,props.myProps);
}

export default personRCE;