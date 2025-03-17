
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditIcon from '@mui/icons-material/Edit';
import TodoEditForm from './TodoEditForm';

import useToggle from './hooks/useToggleState';
export default function TodoItem({todo, remove, toggle, toggleEditTodo}){


    const [isEditting, editToggle] = useToggle(false)
    const labelId = `checkbox-list-label-${todo.id}`; //put any one param say todo.id within  `checkbox-list-label-${}` so that it can generate a unique  id
    const removeTodo = () => {
        remove(todo.id)
    }
    return(
        
        <ListItem
        secondaryAction={
          <>
          <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
            <DeleteRoundedIcon />
          </IconButton>
                    <IconButton edge="end" aria-label="comments" onClick={editToggle}>
                    <EditIcon />
                  </IconButton>
          </>
        }
        disablePadding
      >
        {isEditting? <TodoEditForm toggleEditTodo={toggleEditTodo} id={todo.id} text={todo.text} editToggle={editToggle}/> :
        <ListItemButton role={undefined} /*onClick={handleToggle(value)}*/ dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={todo.completed}  //usin boolean 'completed' instead of predefined code for checkbox is checked or not
              onClick={toggle}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': labelId }} //input props label id shd match ListItemText's id
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={todo.text} style={{textDecoration: todo.completed? 'line-through' : 'none'}}/>  
          {/*  //ListItemText's id shd match input props label id
          whatever put inside primary ll be displayed */}
        </ListItemButton>
        }
      </ListItem>
    )
}