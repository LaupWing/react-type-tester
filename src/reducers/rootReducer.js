const initState = {
    userInput: '',
    story: null,
    timeLeft: 60
}

const rootReducer = (state = initState, action)=>{
    if(action.type === 'MODIFY_USERINPUT'){
        return{
            ...state,
            userInput: action.userInput
        }
    }
    if(action.type === 'SET_STORY'){
        return{
            ...state,
            story: action.story
        }
    }
    if(action.type === 'SET_TIMELEFT'){
        return{
            ...state,
            timeLeft: action.timeLeft
        }
    }
    return state
}

export default rootReducer