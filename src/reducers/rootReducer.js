const initState = {
    userInput: '',
}

const rootReducer = (state = initState, action)=>{
    if(action.type === 'MODIFY_USERINPUT'){
        return{
            ...state,
            userInput: action.value
        }
    }
    return state
}

export default rootReducer