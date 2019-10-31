import React, {Component} from 'react';
import './Input.css'
class Input extends Component{
    handleChange = (e)=>{
        console.log(e.target.value)
        this.props.userTypesIn(e.target.value)
    }
    render(){
        return(
            <div className="Input">
                <textarea onChange={this.handleChange}/>
            </div>
        )
    }

}

export default Input