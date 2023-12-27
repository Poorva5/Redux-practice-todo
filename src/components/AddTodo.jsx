import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { addTodo } from "../features/todo/todoSlice";
import { StyledInput, StyledButton } from "./StyledComponents";
import AddIcon from '@mui/icons-material/Add';

function AddTodo() {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        // Check if the input is not empty before dispatching addTodo
        if (input.trim() !== "") {
            dispatch(addTodo(input))
            setInput('')
        }
    }

    return (
        <div>
            <form onSubmit={addTodoHandler}>
                <div style={{ display: 'flex', marginBottom: '10px'}}>
                <StyledInput 
                    type="text"
                    placeholder="Add your new todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required  
                />
                <StyledButton type="submit"><AddIcon style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: '30px', fontWeight: 600}}/></StyledButton>
                </div>
            </form>
        </div>
    )
}

export default AddTodo;