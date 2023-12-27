import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { StyledTodo, StyledDeleteButton } from "./StyledComponents";
import DeleteIcon from '@mui/icons-material/Delete';

function Todos() {
    const todos = useSelector(state => state.todos)
    console.log(todos)
    const dispatch = useDispatch()
    return (
        <>
        {todos.map((todo) => (
            <div key={todo.id} style={{ display: 'flex', marginTop: '10px'}}>
                <StyledTodo>{todo.text}</StyledTodo>
                <StyledDeleteButton onClick={() => dispatch(removeTodo(todo.id))}><DeleteIcon style={{ color: '#fff'}}/></StyledDeleteButton>
            </div>
        ))}
        </>
    )
}

export default Todos;