export default function CompareDice(){
    let num1 = Math.floor(Math.random()*3 ) +1
    let num2 = Math.floor(Math.random()*3 ) +1
    let isWinner = num1===num2
    let colorObj = {color: isWinner? "green":"red"}
return(
    <div style={colorObj}>
        <h2>Compare Dice</h2>
        {isWinner && <h3>"yow winn!"</h3>}
        <h4>num1: {num1}</h4>
        <h4>num2: {num2}</h4>
    </div>
)

}