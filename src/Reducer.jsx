import { useReducer } from "react"

function countReducer(state, action){ //for eg: value coming from "type: 'INCREMENT', amount:1"
    switch(action.type){
        case "INCREMENT":
            return {count: state.count + action.amount};
        case 'DECREMENT':
            return {count:state.count - action.amount};
        case 'RESET':
            return {count:0}
    }

}
export default function Reducer(){
 //state is being used without using useState hook through useReducer
    const [state, dispatch] = useReducer(countReducer, {count:0}) //HERE {count:0} is initial state value
    return(
        <div>
            <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type: 'INCREMENT', amount:1})}>add 1</button>
        <button onClick={()=>dispatch({type:'INCREMENT', amount:5})}>add 5</button>
        <button onClick={()=> dispatch({type:'DECREMENT', amount:1})}>sub 1</button>
        <button onClick={()=> dispatch({type:'RESET'})}>reset</button>
        </div>
    )
}