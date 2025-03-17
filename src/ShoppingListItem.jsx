function ShoppingListItem({ item, qty, completed}){
let styles = {
    color: completed? 'grey': 'red',
    textDecoration : completed? "line-through": null
}
    return(
    <li style={styles}>
    {item} - {qty}
</li>
    )
}
export default ShoppingListItem;

{/* <li key={i.id}
style={{color: i.completed? 'grey': 'red', 
textDecoration : i.completed? "line-through": null}}>
    {i.item} - {i.qty}
</li> */}