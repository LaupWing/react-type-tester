import React from 'react'
import './Output.css'
const Output = (props)=>{
    const {userInput, timeLeft} = props
    // Output is one step behind maybe use redux to fix this problem?
    const calcWordPM = ()=>{
        if(userInput.length>0){
            const totalWords = userInput.split(' ').filter(input=>input!=='').length
            const wordPerMinute = (totalWords/(60-timeLeft)) * 60
            
            return Math.floor(wordPerMinute)
        }else{
            return '0'
        }
    }
    const incorrect = ()=>{
        if(userInput.length >0){
            return document.querySelectorAll('.LiveView span.word.incorrect').length
        }
        return '0'
    }
    const correct = ()=>{
        if(userInput.length >0){
            return document.querySelectorAll('.LiveView span.word.correct').length
        }
        return '0'
    }
    return(
        <div className="Output">
            <div className="field">
                <p className="info">Time left</p>
                <p className="outcome">{timeLeft}</p>
            </div>

            <div className="field">
                <p className="info">Correct</p>
                <p className="outcome">{correct()}</p>
            </div>

            <div className="field">
                <p className="info">Incorrect</p>
                <p className="outcome">{incorrect()}</p>
            </div>

            <div className="field">
                <p className="info">Words per minute</p>
                <p className="outcome">{calcWordPM()}</p>
            </div>
        </div>
    )
}

export default Output