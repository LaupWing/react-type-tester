import React from 'react'

const word = (props)=>{
    const {word} = props
    const {userInput} = props
    const wordArray = userInput !== null ? userInput.split(' ') : []
    console.log(wordArray)
    const lastWord = wordArray.length>0 ? wordArray[wordArray.length-1] : null
    console.log(lastWord)
    const spanLetters = word.split('').map((letter, index)=>{
        return (
            <span className="letter" key={index+'L'}>
                {letter}
            </span>
        )
    })
    return(
        <span className="word"> {spanLetters} </span>
    )
}

export default word