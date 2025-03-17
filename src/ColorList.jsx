export default function ColorList({color}){
    let element = color.map((col) => <li>{col}</li>)
    return <div>
        <h2>{[<h1>hellow012</h1>, <p>byeee</p>]}</h2>
        {/* if we use <p> instead of <ul>, then every element will be concatenated in a single para */}
        {/* <ul>{element}</ul>   */}
        <ul>{color.map((col) => <li style={{color:col}}>{col}</li>)}</ul>
    </div>
}