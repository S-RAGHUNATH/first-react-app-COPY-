import { useState } from 'react';
import './ColorCube.css'

function randColorGiver(arr){
    let idx = Math.floor(Math.random()* arr.length)
    return arr[idx];
    }
function ColorCube({colors}){
    
    const [color, setColor] = useState(randColorGiver(colors))
    let colorChange = () => {
        let randomColor = randColorGiver(colors);
        setColor(randomColor)
    }
    return (
        <div 
        className="ColorCube" 
        style={{backgroundColor: color}}
        onClick={colorChange} >

        </div>
    )
}
export default ColorCube;