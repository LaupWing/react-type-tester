import React from 'react'
import './Output.css'
const Output = (props)=>{
    const {userInput, timeLeft} = props
    // Output is one step behind maybe use redux to fix this problem?
    const calcUserScore = ()=>{
        if(userInput){
            const correct = document.querySelectorAll('.LiveView span.word.correct').length
            const incorrect = document.querySelectorAll('.LiveView span.word.incorrect').length
            return (
                <div className="result">
                    <p>Correct: {correct}</p>
                    <p>Incorrect: {incorrect}</p>
                </div>
            )
        }
    }
    return(
        <div className="Output">
            <div className="time-left">
                {timeLeft}
            </div>
            {calcUserScore()}
        </div>
    )
}

export default Output