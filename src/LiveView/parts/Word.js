import React from 'react'

const word = (props)=>{
    const {word} = props
    const spanLetters = word.map(letter=>{
        return (
            <span className="letter">
                {letter}
            </span>
        )
    })
    return(
        <span className="word">
            {spanLetters}
        </span>
    )
}

export default word