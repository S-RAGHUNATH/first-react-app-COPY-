export default function Slots({val1, val2, val3}){

    let isEqual = false;
    if(val1 === val2 && val2 === val3) isEqual = true
    //else isEqual = false

    let colorObj = {color: isEqual? "green": "red"}
    //let text = isEqual? "You Win!" : "You lose"
    return (
        <div>
            <h1>{val1} {val2} {val3}</h1>
            <h2 style={colorObj}> {isEqual? "You Win!" : "You lose"} </h2>
            {isEqual? <h3>Congrats</h3>: null}
        </div>
    )
}