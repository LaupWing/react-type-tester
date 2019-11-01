import React from 'react';
import './Input.css'
const Input = (props)=>{

    const handleChange = (e)=>{
        props.userTypesIn(e.target.value)
    }
    return(
        <div className="Input">
            <textarea onChange={handleChange}/>
        </div>
    )
}

export default Input