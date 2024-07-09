
const initialState ={
    value: 0
}
export default function reducer(state = initialState, action) {
if(action.type === "INCREMENT"){
    return {...state,value: state.value+1}
}else if (action.type === "INCREMENT_TEN"){
    return{...state,value: state.value +10}
}else if (action.type === "DECREMENT"){
    return{...state,value: Math.max(state.value - 1, 0)}
}else if (action.type === "DECREMENT_TEN"){
    return{...state,value: Math.max(state.value - 10, 0)}
}else if(action.type === "RESET"){
    return{...state,value: 0}
}
    return state

}