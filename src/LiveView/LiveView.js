import React from 'react'
import './LiveView.css'
import Word from './parts/Word'
const LiveView =  (props)=> {
    const {story} = props
    const storyArray = story.trim().split(' ')
    const storyInSpan = storyArray.map((word,index)=>{
        return(
            <Word key={index} word={word}/>
        )
    })
    return(
        <div className="LiveView">
            {storyInSpan}
        </div>
    )
    
}

export default LiveView