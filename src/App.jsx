import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { TodoWrapper, TodoContainer, StyledHeading } from './components/StyledComponents'
import { useSelector} from "react-redux";
import { StyledText } from './components/StyledComponents';


function App() {
  const [count, setCount] = useState(0)
  const todos = useSelector(state => state.todos)

  return (
    <>
    <TodoWrapper> 
      <TodoContainer>
        <StyledHeading>Todo App</StyledHeading>
        <AddTodo/>
        <Todos/>
        <StyledText>You have {todos.length} pending {todos.length > 1 ? "tasks" : "task"}</StyledText>
      </TodoContainer> 
    </TodoWrapper>
    </>
  )
}

export default App
