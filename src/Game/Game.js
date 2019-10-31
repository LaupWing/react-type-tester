import React, { Component } from 'react'
import Input from '../Input/Input'
import LiveView from '../LiveView/LiveView'
import './Game.css'
class Games extends Component {
    state = {
        userInput : null,
        faulty: null,
        succes: null,
        timeLeft: 60
    }
    userTypesIn = async (input)=>{
        console.log('Game Component')
        await this.setState({
            userInput: input
        })
        console.log(this.state.userInput)
    }
    render(){
        return(
            <div className="Game">
                <LiveView/>
                <Input userTypesIn={this.userTypesIn}/>
            </div>
        )
    }
}

export default Games