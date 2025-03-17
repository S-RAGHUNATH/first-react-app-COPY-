import Die from "./Die";
import './Dice.css'

function Dice({dice, color}){
return (
    <section className="Dice">
        {dice.map((val, i) =>(
            <Die key={i} color={color} value={val}/>
        ))}
    </section>
)
}

export default Dice;