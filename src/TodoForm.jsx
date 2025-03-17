import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {InputAdornment, IconButton} from '@mui/material'
import { Create } from '@mui/icons-material';
//import { IconButton } from '@mui/material';

export default function TodoForm({addTodo}){
    const [text, setText] = useState('')

    const onTyping = (evt) => {
        setText(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo(text); //text from states
        setText('')
    }

    return(
        //technically we shd put it in the form
        <form onSubmit={handleSubmit}>
        {/* // bind the value for the state to be updated while typing */}
        <TextField id="outlined-basic" label="Add Todo" variant="outlined" value={text}          onChange={onTyping}
        InputProps={{  //adornment shd be present inside input props for a textField as per doc
        endAdornment: //endAdorment for adding the icon at the end of i/p
        <InputAdornment position="end">
                                                           {/* type='submit' makes the icon to submit */}
              <IconButton aria-label="toggle password visibility" edge="end" type='submit'>
                <Create />
              </IconButton>
            </InputAdornment>
            }}
          />
          </form>

    )
}

