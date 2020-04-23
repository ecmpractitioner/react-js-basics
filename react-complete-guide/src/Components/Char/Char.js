import React from 'react';
import CharStyle from '../../css/Components/Char/Char.css'

const char = (props)=>{
   // console.log(props.char);
    return(
        <div className='CharStyle'><p onClick={props.click}>{props.char}</p></div>
    );
};

export default char;