import useInputState from "./hooks/useInputState";
import  TextField  from "@mui/material/TextField";  //@mui/material/ListItemText'
function TodoEditForm({toggleEditTodo, id, text, editToggle}){
    const [value, handleChange, reset] = useInputState(text)
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            toggleEditTodo(id, value)
            reset();
            editToggle();
        }}>
        <TextField margin='normal' value={value} onChange={handleChange}/>
        </form>
    )
}
export default TodoEditForm;