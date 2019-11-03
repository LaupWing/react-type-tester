import React, { Component } from 'react'
import './Output.css'
class Output extends Component{

    // Output is one step behind maybe use redux to fix this problem?
    calcWordPM = ()=>{
        if(this.props.userInput.length>0){
            const totalWords = this.props.userInput.split(' ').filter(input=>input!=='').length
            const wordPerMinute = (totalWords/(60-this.props.timeLeft)) * 60
            
            return Math.floor(wordPerMinute)
        }else{
            return '0'
        }
    }
    incorrect = ()=>{
        if(this.props.userInput.length >0){
            return document.querySelectorAll('.LiveView span.word.incorrect').length
        }
        return '0'
    }
    correct = ()=>{
        if(this.props.userInput.length >0){
            return document.querySelectorAll('.LiveView span.word.correct').length
        }
        return '0'
    }
    render(){
        return(
            <div className="Output">
                <div className="field">
                    <p className="info">Time left</p>
                    <p className="outcome">{this.props.timeLeft}</p>
                </div>
    
                <div className="field">
                    <p className="info">Correct</p>
                    <p className="outcome">{this.correct()}</p>
                </div>
    
                <div className="field">
                    <p className="info">Incorrect</p>
                    <p className="outcome">{this.incorrect()}</p>
                </div>
    
                <div className="field">
                    <p className="info">Words per minute</p>
                    <p className="outcome">{this.calcWordPM()}</p>
                </div>
            </div>
        )
    }
}

export default Output