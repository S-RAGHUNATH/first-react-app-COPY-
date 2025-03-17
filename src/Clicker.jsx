function hoverEvent(){
    console.log("hoveredddd")
}

function formEvent(event){
    event.preventDefault();  //to prevent form reloading, which is the default behaviour of a form
    console.log("not refresheddd")
}
export default function Clicker({message, buttonText}){
    const clickEvent2 = () => {  //this func is defimed here so can make use of prop.message
        alert(message)
    }
    return(
        <form onSubmit={formEvent}>
            <p onMouseOver={hoverEvent}>click me</p>
            <button onClick={clickEvent2}>{buttonText}</button>
        </form>
    )
}