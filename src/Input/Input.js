import React, {Component} from 'react';
import './Input.css'
import {connect} from 'react-redux'

class Input extends Component{
    // const {inputDisplay} = props 
    
    handleSubmit = (e)=>{
        e.preventDefault()
    }
    
    handleKeyUp = (e)=>{
        if(e.key.toLowerCase() === 'enter'){
            document.querySelector('.Input textarea').value = ''
            return this.props.reset()
        }
        const {setUserinput} = this.props
        setUserinput(e.target.value)
    }
    render(){
        if(this.props.inputDisplay === 'textarea'){
            return(
                <div className="Input">
                    <textarea onKeyUp={this.handleKeyUp} spellCheck="false"/>
                    <button>Press enter to redo</button>
                </div>
            )
        }else{
            return(
                <div className="Input">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"/>
                    </form>
                </div>
            )
        }
    }
}

const mapStateToProps = (state)=>{
    return{
        inputDisplay: state.inputDisplay
    }
}

const mapDispatchProps = (dispatch)=>{
    return{
        setUserinput: (userInput)=>dispatch({type:'SET_USERINPUT', userInput})
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Input)