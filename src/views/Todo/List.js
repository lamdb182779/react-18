import { useState } from "react"

const List = (props) => {
    let todo = props.todo
    let [edit, setEdit] = useState({})
    const handleEdit = (item, index) => {
        setEdit({ ...edit, item, index })
    }
    const handleConfirm = (item, index) => {
        if (!item) {
            alert('Missing paragram!')
        }
        else {
            setEdit({})
            props.editTodo(item, index)
        }
    }
    const handleDelete = (index) => {
        if (Object.keys(edit) !== 0) {
            if (index === edit.index) {
                setEdit({})
            }
            if (index < edit.index) {
                edit.index = edit.index - 1
                setEdit({ ...edit })
            }
        }
        props.deleteTodo(index)
    }
    const handleChange = (event) => {
        edit.item = event.target.value
        setEdit({ ...edit })
    }
    return (
        <div>
            {todo && todo.length > 0 &&
                todo.map((item, index) => {
                    return (
                        <div key={index}>
                            {(Object.keys(edit) === 0 || index !== edit.index) ?
                                <>
                                    <span>
                                        {index + 1} - {item}
                                    </span>
                                    <span onClick={() => handleEdit(item, index)}>
                                        <button>
                                            Edit
                                        </button>
                                    </span>
                                </>
                                :
                                <>
                                    <span>
                                        {index + 1} - <input type="text" value={edit.item} onChange={(event) => handleChange(event)} />
                                    </span>
                                    <span onClick={() => handleConfirm(edit.item, index)}>
                                        <button>
                                            Confirm edit
                                        </button>
                                    </span>
                                </>
                            }
                            <span>
                                <button onClick={() => handleDelete(index)}>
                                    Delete
                                </button>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List