import { useState } from "react";
import {getRolls, sum} from './utils'
import Dice from './Dice';
import Button from "./Button";

function LuckyN({numDice = 2, winCheck}){
    //have state in a comp and pass it down to other comp. Data can be pasased down and not up
   let [dice, setDice] = useState(getRolls(numDice))
   let isWinner = winCheck(dice) 
   function reroll(){
    //we r not updating the state based on the old state so no callback, etc reqd
    setDice(getRolls(numDice))
   }
   return (
    <div>
        <h1>Lucky {isWinner && 'Winner'}</h1>
        <Dice dice={dice}/>
        <button onClick={reroll}>Re-roll</button>
        <Button clickFn={reroll}/>  
        {/* passing func as a prop to next comp  file */}
    </div>
   )
}

export default LuckyN;