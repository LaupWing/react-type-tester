import React from 'react'

const word = (props)=>{
    const {word} = props
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