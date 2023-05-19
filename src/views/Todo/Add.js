import { useState } from "react";

const Add = (props) => {
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    const handleClick = (item) => {
        if (!item) {
            alert('Missing paragram!')
        }
        else {
            props.addNewTodo(item)
            setInputValue('')
        }
    }
    let [inputValue, setInputValue] = useState('')
    return (
        <div>
            <input type="text" value={inputValue} onChange={(event) => handleChange(event)} />
            <br />
            <button onClick={() => handleClick(inputValue)}> Add new </button>
        </div>)
}

export default Add