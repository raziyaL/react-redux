import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Counter(props) {

    const counterValue = useSelector(state => state.value);
    const dispatch = useDispatch();


    function plusOne(){
        dispatch({
            type: 'INCREMENT'
        })
    }
    function plusTen(){
        dispatch({
            type: 'INCREMENT_TEN'
        })
    }
    const minusOne = () => dispatch({type: "DECREMENT"})

    const minusTen = () => dispatch({type: 'DECREMENT_TEN'})

    const reset= () =>dispatch({type:"RESET"})

    return (
        <div>
            <h1>{counterValue}</h1>
            <button onClick={plusOne}>+1</button>
            <button onClick={plusTen}>+10</button>
            <button onClick={minusTen} >-10</button>
            <button onClick={minusOne} >-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default Counter;