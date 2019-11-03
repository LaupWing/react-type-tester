import React from 'react'
import './LiveView.css'
import Word from './parts/Word'
import {connect} from 'react-redux'

const LiveView =  (props)=> {
    const {story, userInput} = props
    const storyArray = story.trim().split(' ')

    const storyInSpan = storyArray.map((word,index)=>{
        return(
            <Word 
                key={index} 
                word={word}
                wordIndex={index} 
                userInput={userInput}
            />
        )
    })
    return(
        <div className="LiveView">
            {storyInSpan}
        </div>
    )
    
}

const mapStateToProps = (state)=>{
    return{
        story: state.story
    }
}

export default connect(mapStateToProps)(LiveView)