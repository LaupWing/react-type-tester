import React from 'react';
import './Input.css'
const Input = (props)=>{
    const {inputDisplay} = props 
    
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    
    const handleKeyUp = (e)=>{
        if(e.key.toLowerCase() === 'enter'){
            return props.reset()
        }
        props.userTypesIn(e.target.value)
        console.log(e.target.value)
    }

    if(inputDisplay === 'textarea'){
        return(
            <div className="Input">
                <textarea onKeyUp={handleKeyUp} spellCheck="false"/>
                <button>Press enter to redo</button>
            </div>
        )
    }else{
        return(
            <div className="Input">
                <form onSubmit={handleSubmit}>
                    <input type="text"/>
                </form>
            </div>
        )
    }
}

export default Input