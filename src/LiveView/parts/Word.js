import React from 'react'
import './Word.css'
const word = (props)=>{
    const {word, userInput, wordIndex} = props
    // These variables below needs to moved to the game component
    const wordArray = userInput !== null ? userInput.split(' ') : []
    const wordArrayWithIndex = wordArray.map((word,index)=>{
        return{
            word,
            index
        }
    })
    const checkWord = ()=>{
        const findIndex = wordArrayWithIndex.find(wordObj=>wordObj.index===wordIndex)
        if(findIndex){
            if(findIndex.index === (wordArray.length-1)){
                return 'word current'
            }
            if(findIndex.word === word){
                return 'word correct'
            }else{
                return 'word incorrect'
            }
        }else{
            return 'word'
        }
    }
    const spanLetters = word.split('').map((letter, index)=>{
        return (
            <span className="letter" key={index+'L'}>
                {letter}
            </span>
        )
    })
    return(
        <span className={checkWord()}> {spanLetters} </span>
    )
}

export default word