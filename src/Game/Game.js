import React, { Component } from 'react'
import Input from '../Input/Input'
import LiveView from '../LiveView/LiveView'
import Output from '../Output/Output'
import './Game.css'
import {connect} from 'react-redux'


class Games extends Component {
    componentDidMount(){
        // this.props.setStory(this.state.story)
    }
    state = {
        interval:null,
        userInput : '',
        faulty: null,
        succes: null,
        timeLeft: 60,
    }
    userTypesIn = async (input)=>{
        await this.setState({
            userInput: input
        })
        this.startCounting()
    }
    startCounting = ()=>{
        if(this.state.userInput.length > 0){
            if(this.state.interval===null){
                this.setState({
                    interval : setInterval(()=>{
                        this.setState({
                            timeLeft : this.state.timeLeft -1
                        })
                    },1000)
                })
            }
        }
    }
    stopCounting = ()=>{
        clearInterval(this.state.interval)
        this.setState({
            interval: null,
            timeLeft: 60
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
            <div className="Game">
                <Output/>
                <LiveView/>
                <Input reset={this.reset}/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        story: state.story
    }
}

const mapDispatchProps = (dispatch)=>{
    return{
        setStory: (story)=>dispatch({type:'SET_STORY', story})
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Games)