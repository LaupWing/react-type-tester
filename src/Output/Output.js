import React, { Component } from 'react'
import './Output.css'
import {connect} from 'react-redux'

class Output extends Component{
    state={
        started: false,
        timeElapsed: 0,
        interval: null
    }
    // Output is one step behind maybe use redux to fix this problem?
    calcWordPM = ()=>{
        const totalWords = this.props.userInput.split(' ').filter(input=>input!=='').length
        const timeLeft = this.props.duration - this.state.timeElapsed
        if(this.props.userInput.length>0){
            this.startCounting()
            const wordPerMinute = (totalWords/(60-timeLeft)) * 60
            if(!this.state){
                this.setState({
                    started: true
                })
            }
            return Math.floor(wordPerMinute)
        }else{
            if(this.state.started){
                return Math.floor((totalWords/(60-timeLeft)) * 60)
            }
            return '0'
        }
    }
    incorrect = ()=>{
        if(this.props.userInput.length >0){
            return document.querySelectorAll('.LiveView span.word.incorrect').length
        }
        else{
            if(this.state.started){
                return document.querySelectorAll('.LiveView span.word.incorrect').length
            }
            return '0'
        }
    }
    correct = ()=>{
        if(this.props.userInput.length >0){
            return document.querySelectorAll('.LiveView span.word.correct').length
        }
        else{
            if(this.state.started){
                return document.querySelectorAll('.LiveView span.word.correct').length
            }
            return '0'
        }
    }
    startCounting = ()=>{
        if(this.props.userInput.length > 0){
            if(this.state.interval===null){
                this.setState({
                    interval : setInterval(()=>{
                        console.log('starting interval')
                        this.setState({
                            timeElapsed : this.state.timeElapsed + 1
                        })
                    },1000)
                })
            }
        }
    }
    stopCounting = ()=>{
        clearInterval(this.state.timeElapsed)
        this.setState({
            interval: null,
            timeElapsed: 0
        })
    }
    reset = async  ()=>{
        await this.setState({
            userInput: ''
        })
        this.stopCounting()
    }
    render(){
        return(
            <div className="Output">
                <div className="field">
                    <p className="info">Time left</p>
                    <p className="outcome">{this.props.duration - this.state.timeElapsed}</p>
                </div>
    
                <div className="field">
                    <p className="info">Correct</p>
                    <p className="outcome">{this.correct()}</p>
                </div>
    
                <div className="field">
                    <p className="info">Incorrect</p>
                    <p className="outcome">{this.incorrect()}</p>
                </div>
    
                <div className="field">
                    <p className="info">Words per minute</p>
                    <p className="outcome">{this.calcWordPM()}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        userInput: state.userInput,
        duration: state.duration
    }
}

export default connect(mapStateToProps)(Output)