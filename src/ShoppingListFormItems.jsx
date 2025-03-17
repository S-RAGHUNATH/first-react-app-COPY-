import {useEffect, useState} from "react"
import { v4 as uuid } from "uuid"
import ShoppingListForm from "./ShoppingListForm"
function ShoppingListFormItems(){
    const [item, setItem] = useState([{id:uuid(), product:'raghu', qty:1}, {id:uuid(), product:'guru', qty:2}])

    const addItem = (item) => {
        setItem(currVal => {
            return [ ...currVal, {...item, id:uuid()} ] //adding new object to this array i.e [currVal] and that object consists of spreaded item which is added newly with new id.
        })
    }

    return (
        <div>
            <ul>
                {item.map((i, idx) => 
                    <li key={i.idx}>{i.product} - {i.qty}</li>
                )}
            </ul>
            <ShoppingListForm addItem={addItem} />
        </div>
    )
}
export default ShoppingListFormItems