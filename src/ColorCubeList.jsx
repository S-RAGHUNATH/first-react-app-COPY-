import ColorCube from "./ColorCube";
import './ColorCubeList.css'

function ColorCubeList({colors}){
    let boxes = [];
    for(let i=0;i< 25;i++){
        boxes.push(<ColorCube colors={colors}/>)
    }
    console.log(boxes)
    return (
        <div className="ColorCubeList">
            {boxes}
        </div>
    )
}
export default ColorCubeList;