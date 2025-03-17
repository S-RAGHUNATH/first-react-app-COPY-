import { useState } from "react"

export default function ScoreKeeper({playerNum, target}){
   let [score, setScore] = useState(new Array(playerNum).fill(0)) //to create array and fill with value 0
    
    function increment(idx){
        setScore(currScore => {
            return currScore.map((value, i) => {
                if(idx===i) return value+1 
                else return value
            })
        })
    }

    function reset(){
        setScore(new Array(playerNum).fill(0))  //resetting everything to 0
    }
    return <div>
        <h2>Score keeper</h2>
        <ul>
            {score.map((value, idx) => {
               return (    
               <li key={idx}>
                player{idx+1} : {value}
                <button onClick={() => increment(idx)}>+1</button>
                {/* if 1st condn fullfilled, 'winner' ll be displayed */}
                {value >= target && 'winner'}  
                </li>
               )
            })}
        </ul>
        <button onClick={reset}>reset</button>
    </div>
}