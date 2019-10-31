import React from 'react'
import './LiveView.css'
import Word from './parts/Word'

const LiveView =  (props)=> {
    const {story, userInput} = props
    const storyArray = story.trim().split(' ')
    
    const storyInSpan = storyArray.map((word,index)=>{
        return(
            <Word key={index} word={word} userInput={userInput}/>
        )
    })
    return(
        <div className="LiveView">
            {storyInSpan}
        </div>
    )
    
}

export default LiveView