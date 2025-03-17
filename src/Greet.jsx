function Greet(props){
    let randNum = Math.floor(Math.random()* props.number)+1
    return <h1>hi da {props.name}, then random number is {randNum}</h1>
}

export default Greet;