import { useState } from "react";
import List from "./List";
import Add from "./Add";

const Todo = (props) => {
    let [todo, setTodo] = useState([])
    const addNewTodo = (item) => {
        setTodo([...todo, item])
    }
    const editTodo = (item, index) => {
        todo.splice(index, 1, item)
        setTodo([...todo])
    }
    const deleteTodo = (index) => {
        todo.splice(index, 1)
        setTodo([...todo])
    }
    return (
        <div className="todo-container">
            <div>To do App with {props.author}</div>
            <List todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
            <Add addNewTodo={addNewTodo} />
        </div>
    )
}

export default Todo