import {useEffect, useState} from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem'
import TodoForm from './TodoForm';
import {Box} from  '@mui/material'

const getInitialData = () => { 
    const data = JSON.parse(localStorage.getItem('todos')) //'todos' shd be same as setItems
    if(!data) return []  //for the first time 'data' will be empty
   if(data.length < 1) console.log("vaadi yenna jekkam")
    return data
}
//localStorage.clear() in browser
const TodoList = () => {
    const [todos, setTodos] = useState(getInitialData); //getting todo values for useState from a func

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos)); //to store items in localStorage //'todos' shd be same as getItems
    }, [todos])  //useEffect TO BE invoked based on value change in todos

    const removeTodo = (id) => {
        setTodos(currTodos => {
            //returns filtered version of todoList except one that match id
        return    currTodos.filter((todo) => todo.id!==id)
        })
    }

    function addTodo(text){ //text from state present in TodoForm
        setTodos(currTodos => (
            [...currTodos, {text:text, id:crypto.randomUUID(), completed:false}] //crypto.randomUUID() for random unique ID
        ))
    }

    //to tick the checkbox using unique id
    function toggleTodo(id){   //this fn shd be added in parent where state lives
        setTodos(currTodos => (
            currTodos.map((todo) => {
                if(todo.id === id) return {...todo, completed: !todo.completed}
                else return todo
            })
        ))
    }

        //to edit using unique id
        function toggleEditTodo(id, newText){   //this fn shd be added in parent where state lives
            setTodos(currTodos => (
                currTodos.map((todo) => {
                    if(todo.id === id) return {...todo, text: newText}
                    else return todo
                })
            ))
        }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center', 
            flexDirection: 'column',
            alignItems: 'center',
            m: 3 //margin
        }}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} remove={removeTodo} toggleEditTodo={toggleEditTodo}
                    toggle={() => toggleTodo(todo.id)}/>  //adding key is must - assing the key where loop is happening. Here loop happens and not in TodoItem

                    //either use implicit return i.e () or use {return <>}
                    // using remove={removeTodo} instead of using arrow fn i.e remove{()=>removeTodo(id)}
             ))}  
             {/* putting TodoForm in the end of page */}
             <TodoForm addTodo={addTodo} />  
        </List>
        </Box>
    )
}
export default TodoList;

//localStorage.clear() in console to clear the local storage