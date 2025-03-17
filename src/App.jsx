// import './App.css'
// import './Greet'
import Greet from './Greet'
import ListPicker from './ListPicker'
import CompareDice from './CompareDice'
import Heading from './Heading'
import ColorList from './ColorList'
import Slots from './Slots'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Counter from './Counter'
import ColorCubeList from './ColorCubeList'
import ColorCube from './ColorCube'
import PlayerScores from './PlayerScores'
import EmojiArray from './EmojiArray'
import ScoreKeeper from './ScoreKeeper'
import Die from './Die'
import Dice from './Dice'
import LuckyN from './LuckyN'
import {sum} from './utils'
import Box from './Box'
import BoxGrid from './BoxGrid'
import UserForm from './UserForm'
import ShoppingListForm from './ShoppingListForm'
import ShoppingListFormItems from './ShoppingListFormItems'
import UseEffecttt from './UseEffecttt'
import Button from '@mui/material/Button';
import RatingDemo from './RatingDemo'
import TodoList from './TodoList'
import { CssBaseline } from '@mui/material' //takes away any default browser style
import ClassComp from './ClassComp'
import Reducer from './Reducer'

let data = [
            {id:1, item:'milk', qty:4, completed:false},
            {id:2, item: 'egg', qty:7, completed:true},
            {id:3, item: 'carrot', qty:1, completed:false},
            {id:4, item: 'banana', qty:8, completed:true}
          ]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function lessThan4(dice){
  return sum(dice) < 4
}

function allSame(dice){
  //to check all nums in an arrayare same
  return dice.every((element)=> element === dice[0])
}
let colors = ['red', 'orange', 'blue', 'green', 'brown', 'pink', 'violet', 'teal', 'yellow', 'grey']
function App() {

  return (
    <>
    {/* <Greet name="raghu" number={8}/>
    <Greet name="raghu" number={8}/>
    <ListPicker array={["a","b","c"]} obj={{a:2, aa:22, aaa:222}}/> */}
    {/* <ListPicker obj={{a:2, aa:22, aaa:222}}/> */}
    {/* <Heading color="magenta" text="boooooooo" fontSize="30px"/>
    <Heading color='teal' text="boooooooo" fontSize="60px"/>
    <CompareDice/>
    <CompareDice/>
    <CompareDice/>
    <ColorList color={["red", "orange", "brown"]} />
    <ColorList color={["orangered", "pink", "grey", "teal"]} />
    <Slots val1="a" val2="a" val3="a"/>
    <Slots val1="a" val2="ac" val3="a"/>
    <Slots val1="a" val2="a" val3="a"/> */}
    
    {/* <ShoppingList items={data}/> */}
    {/* <PropertyList properties={properties}/>
    <Clicker message="Hi" buttonText='click for a greet'/>
    <Clicker message="u shd not clickkk" buttonText='dont touch me'/>
    <Counter/> */}
    {/* <ColorCubeList colors={colors}/> */}
    {/* <Counter/>
    <PlayerScores/> */}
    {/* <EmojiArray/> */}
    {/* <ScoreKeeper playerNum={8} target={5}/> */}
    {/* <Dice dice={[2,4,7]} color={"red"}/>
    <Dice dice={[2,4,7]} color={"orange"}/>
    <Dice dice={[2,4,7]} color={"grey"}/> */}
    {/* <Die value={2}/>
    <Die value={4}/> */}
    {/* <BoxGrid boxCount={[8]}/>
    <LuckyN numDice={2} winCheck={allSame}/>
    <LuckyN numDice={2} winCheck={lessThan4}/> */}
    {/* <LuckyN numDice={1} goal={3}/> */}
    {/* <UserForm/> */}
    {/* <ShoppingListFormItems/> */}
    {/* <ShoppingListFormItems/>
    <UseEffecttt/>
    <Button variant="text">Text</Button>
      <Button variant="contained" onClick={() => alert("touchhhed")}>Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <RatingDemo /> */}
      <CssBaseline/>
    {/* <TodoList/> */}
    <Reducer/>

{/* <ClassComp/> */}
    </>
  )
}

export default App
