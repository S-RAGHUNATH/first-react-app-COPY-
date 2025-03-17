function ListPicker({array, obj}){
    let randIdx = Math.floor(Math.random() * array.length)+1
    let chosen = array[randIdx-1]
    let chosen2 = obj[randIdx-1]
    console.log(obj)
return <div>
    <h3>{array}</h3>
    <h3> chosen array: {chosen}</h3>
    {/* <h3>{obj}</h3> */}
    {/* <h3>chosen object: {chosen2}</h3> */}
</div>
}
export default ListPicker;