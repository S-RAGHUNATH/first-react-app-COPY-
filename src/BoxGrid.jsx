import { useState } from "react"
import Box from "./Box"

function BoxGrid({boxCount}){
   const [boxes, setBoxes] = useState([false, false, false, true, false, true, false, true])
   function reset(){
    setBoxes(new Array(8).fill(false))
   }

   const toggleBox = (idx) => {
    setBoxes( (currbox) => {
    return currbox.map((val, i) => {
        if(idx === i){
            return !val
        }else{
             return val
        }
    })
   })
}
    return(
        <div>
       { boxes.map((value, idx) => (
            <Box isActive={value} key={idx} toggle={() => toggleBox(idx)}/>
        ))}
        <button onClick={reset}>reset</button>
        </div>
    )
}
export default BoxGrid