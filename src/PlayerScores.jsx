import { useState } from "react";

function PlayerScores(){
    const [scores, setScores] = useState({p1score:0, p2score:0})
    function p1click(){
        //scores.P1score +=1;  setScores(scores);   will not work

        // let newScore = {...scores, p1score: scores.p1score+1}
        // setScores(newScore)

        setScores(oldScore => {
            return {...oldScore, p1score:oldScore.p1score + 1}
        })
    }

    function p2click(){
        setScores(oldScore => {
            return {...oldScore, p2score: oldScore.p2score + 1}
        })
    }
    return(
        <div>
            <p>{scores.p1score}</p>
            <p>{scores.p2score}</p>
            <button onClick={p1click}>P1 score</button>
            <button onClick ={p2click}>P2 score</button>
        </div>
    )
}
export default PlayerScores;