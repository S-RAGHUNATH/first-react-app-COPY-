import ShoppingListItem from "./ShoppingListItem";
// ShoppingListItem is a another comp where ezch item is rendered

function ShoppingList({items}){

    //textDecoration : "line-through" used for strike out
    //key={i.id} is the unique identifier called "key" prop which are necessary in  for each element,
    // if not will see error in console
    return (
        <ul>
            {items.map((i) => 
                <ShoppingListItem 
                key={i.id} item={i.item} qty={i.qty} completed={i.completed}
                //<ShoppingListItem key = {i.id} {...i} />   spread operator
                />
            )}
        </ul>
    )
}

export default ShoppingList;