import { useState } from "react"

export default function Counter(){
    
    const [num, setNum] = useState(0);
    console.log("check again num" + num)
    const increment = () => {
        setNum(num => num+1)
        console.log('num is set:' + num)
        setNum(num => num+1)
    }

    const [isHappy, setIsHappy] = useState(true)
    const toggleCheck = () => {
        setIsHappy(!isHappy)
    }
    return (
        <div>
            <p>count num is: {num} </p>
            <button onClick={increment}>counterrrrrrr</button>
            <p onClick={toggleCheck}>{isHappy? ':)' : ':('}</p>
        </div>
    )
}