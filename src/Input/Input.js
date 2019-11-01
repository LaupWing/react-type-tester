import React from 'react';
import './Input.css'
const Input = (props)=>{
    const {inputDisplay} = props 
    
    const handleChange = (e)=>{
        props.userTypesIn(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    const handleKeypress = (e)=>{
        if(e.key.toLowerCase() === 'enter'){
            props.reset()
        }
    }

    if(inputDisplay === 'textarea'){
        return(
            <div className="Input">
                <textarea onChange={handleChange} onKeyPress={handleKeypress} spellCheck="false"/>
                <button>Press enter to redo</button>
            </div>
        )
    }else{
        return(
            <div className="Input">
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange}/>
                </form>
            </div>
        )
    }
}

export default Input