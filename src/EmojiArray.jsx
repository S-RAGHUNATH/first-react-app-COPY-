import { useState } from "react"
import {v4 as uuid} from 'uuid'

export default function EmojiArray(){
                                        //uuid() - generate new id for an element
    const [emoji, setEmoji] = useState([{id: uuid(), emoji: ":)"}])
    function addEmo(){
        setEmoji(currEmo => 
            [...currEmo, {id: uuid(), emoji: ":("}]
        )
    }

    function deleteEmo(id){
        console.log(id)
        setEmoji(currEmoArr => {
            return currEmoArr.filter(e => e.id!== id) //filter to create new array as we dont alter the exisiting array inreact
        })
    }

    function makeHeats(){
        setEmoji(currEmoArr => {
            return currEmoArr.map(e => {  //returning new mappped version
                return {...e, emoji: '^_^' }   //returning each altered element
            })
        })
    }
    return(
        <div>
            {emoji.map((e)=> (  //using arraow func to pass param. witbout arr.func deleteEmo() will execute the func directly
                <span onClick={() => deleteEmo(e.id)} key = {e.id} style={{fontSize: '4em'}}>{e.emoji}</span>
                
))}
            <button onClick={addEmo}>add emoi</button>
            <button onClick={makeHeats}>make everything heart</button>
        </div>
    )
}