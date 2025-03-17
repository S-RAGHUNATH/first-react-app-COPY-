import './Die.css'
export default function Die({value, color}){
    return <div className="Die"style={{background: color}}>{value}</div>
    
}