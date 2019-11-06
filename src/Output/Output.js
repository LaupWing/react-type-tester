import React, { Component } from 'react'
import './Output.css'
import {connect} from 'react-redux'

class Output extends Component{
    state={
        timeElapsed: 0,
        interval: null,
        results:{
            wordsPerMinute: null,
            correct: null,
            incorrect: null
        },
        finished: false
    }
    // Output is one step behind maybe use redux to fix this problem?
    calcWordPM = ()=>{
        const totalWords = this.props.userInput.split(' ').filter(input=>input!=='').length
        const timeLeft = this.props.duration - this.state.timeElapsed
        if(this.props.userInput.length>0){
            this.startCounting()
            const wordPerMinute = (totalWords/(this.props.duration-timeLeft)) * 60
            return Math.floor(wordPerMinute)
        }else{
            return '0'
        }
    }
    incorrect = ()=>{
        if(this.props.userInput.length >0){
            return document.querySelectorAll('.LiveView span.word.incorrect').length
        }
        else{
            return '0'
        }
    }
    correct = ()=>{
        if(this.props.userInput.length >0){
            return document.querySelectorAll('.LiveView span.word.correct').length
        }
        else{
            return '0'
        }
    }
    startCounting = ()=>{
        if(this.props.userInput.length > 0 && !this.state.finished){
            if(this.state.interval===null){
                this.setState({
                    interval : setInterval(async ()=>{
                        if(this.state.timeElapsed === this.props.duration){
                            console.log('setting the results')
                            this.setState({
                                results:{
                                    incorrect: this.incorrect(),
                                    correct: this.correct(),
                                    wordsPerMinute: this.calcWordPM()
                                },
                                finished: true
                            }, ()=>{
                                this.stopCounting()
                            })
                            return
                        }else{
                            this.setState({
                                timeElapsed : this.state.timeElapsed + 1
                            })
                        }
                    },1000)
                })
            }
        }
    }
    stopCounting = ()=>{
        clearInterval(this.state.interval)
        console.log(this.state.results)
        this.setState({
            interval: null,
            timeElapsed: 0
        })
    }
    test = ()=>{
        console.log(this.state.results)
    }
    reset = async  ()=>{
        await this.setState({
            userInput: ''
        })
        this.stopCounting()
    }
    render(){
        return(
            <div className="Output" onClick={this.test}>
                <div className="field">
                    <p className="info">Time left</p>
                    <p className="outcome">{this.props.duration - this.state.timeElapsed}</p>
                </div>
    
                <div className="field">
                    <p className="info">Correct</p>
                    <p className="outcome correct">{this.state.results.correct ? this.state.results.correct : this.correct()}</p>
                </div>
    
                <div className="field">
                    <p className="info">Incorrect</p>
                    <p className="outcome incorrect">{this.state.results.incorrect ? this.state.results.incorrect : this.incorrect()}</p>
                </div>
    
                <div className="field">
                    <p className="info">Words per minute</p>
                    <p className="outcome wpm">{this.state.results.wordsPerMinute ? this.state.results.wordsPerMinute : this.calcWordPM()}</p>
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