import React from 'react'
import './LiveView.css'

const LiveView =  (props)=> {
    const {story} = props
    const storyArray = story.trim().split(' ')
    const storyInSpan = storyArray.map((word,index)=>{
        return(
            <span key={index}> {word} </span>
        )
    })
    return(
        <div className="LiveView">
            {storyInSpan}
        </div>
    )
    
}

export default LiveView