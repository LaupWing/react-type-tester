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
        story: `
            Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife. Their house was small, for the lumber to build it had to be carried by wagon many miles. There were four walls, a floor and a roof, which made one room; and this room contained a rusty looking cookstove, a cupboard for the dishes, a table, three or four chairs, and the beds. Uncle Henry and Aunt Em had a big bed in one corner, and Dorothy a little bed in another corner. There was no garret at all, and no cellar--except a small hole dug in the ground, called a cyclone cellar, where the family could go in case one of those great whirlwinds arose, mighty enough to crush any building in its path. It was reached by a trap door in the middle of the floor, from which a ladder led down into the small, dark hole. When Dorothy stood in the doorway and looked around, she could see nothing but the great gray prairie on every side. Not a tree nor a house broke the broad sweep of flat country that reached to the edge of the sky in all directions. The sun had baked the plowed land into a gray mass, with little cracks running through it. Even the grass was not green, for the sun had burned the tops of the long blades until they were the same gray color to be seen everywhere. Once the house had been painted, but the sun blistered the paint and the rains washed it away, and now the house was as dull and gray as everything else. When Aunt Em came there to live she was a young, pretty wife. The sun and wind had changed her, too. They had taken the sparkle from her eyes and left them a sober gray; they had taken the red from her cheeks and lips, and they were gray also. She was thin and gaunt, and never smiled now. When Dorothy, who was an orphan, first came to her, Aunt Em had been so startled by the child's laughter that she would scream and press her hand upon her heart whenever Dorothy's merry voice reached her ears; and she still looked at the little girl with wonder that she could find anything to laugh at. Uncle Henry never laughed. He worked hard from morning till night and did not know what joy was. He was gray also, from his long beard to his rough boots, and he looked stern and solemn, and rarely spoke. It was Toto that made Dorothy laugh, and saved her from growing as gray as her other surroundings. Toto was not gray; he was a little black dog, with long silky hair and small black eyes that twinkled merrily on either side of his funny, wee nose. Toto played all day long, and Dorothy played with him, and loved him dearly. Today, however, they were not playing. Uncle Henry sat upon the doorstep and looked anxiously at the sky, which was even grayer than usual. Dorothy stood in the door with Toto in her arms, and looked at the sky too. Aunt Em was washing the dishes.
        `,
        inputDisplay: 'textarea'
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
                <Output
                    timeLeft={this.state.timeLeft}
                    userInput={this.state.userInput}
                />
                <LiveView 
                    story={this.state.story} 
                    userInput={this.state.userInput}
                />
                <Input 
                    reset={this.reset}
                    userTypesIn={this.userTypesIn}
                    inputDisplay={this.state.inputDisplay}
                />
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