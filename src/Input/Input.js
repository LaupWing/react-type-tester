import React from 'react';
import './Input.css'
import {connect} from 'react-redux'

const Input = (props)=>{
    const {inputDisplay} = props 
    
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    
    const handleKeyUp = (e)=>{
        if(e.key.toLowerCase() === 'enter'){
            document.querySelector('.Input textarea').value = ''
            return props.reset()
        }
        props.setUserinput(e.target.value)
        // props.userTypesIn(e.target.value)
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

const mapStateToProps = (state)=>{
    return{
        inputDisplay: state.inputDisplay
    }
}

const mapDispatchProps = (dispatch)=>{
    return{
        setUserinput: (input)=>dispatch({type:'SET_USERINPUT', input})
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Input)