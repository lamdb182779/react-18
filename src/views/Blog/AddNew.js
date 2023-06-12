import Form from 'react-bootstrap/Form';
import "../../style/AddNew.scss"
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react';
import axios from 'axios';

const AddNew = (props) => {

    let [title, setTitle] = useState('')
    let [body, setBody] = useState('')
    const handleonChange = (event, setState) => {
        setState(event.target.value)
    }

    const handleonSubmit = async () => {
        var newBlog = undefined
        if (!title || !body) {
            toast.warn('Missing Paragram!')
            props.updateTopTwenty(newBlog)
        }

        else {
            let data = {
                title: title,
                body: body,
                userID: 1,
            }
            let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
            if (res && res.data) {
                newBlog = res.data
                props.updateTopTwenty(newBlog)
                toast.success('Mission Success!')
            } else {
                toast.warn('Can\'t save data')
            }
        }
    }
    useEffect(() => {
        if (props.save) handleonSubmit()
    }, [props.save]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="addnew-container">
            <div className="addnew-title">
                <h2>
                    ADD NEW BLOG WITH {props.author}
                </h2>
            </div>
            <div className="addnew-content">
                <Form>
                    <Form.Group className="mb-3" controlId="addnew-title">
                        <Form.Label>Blog title:</Form.Label>
                        <Form.Control as="textarea" placeholder='Enter the title' value={title} onChange={(event) => handleonChange(event, setTitle)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="addnew-body">
                        <Form.Label>Blog description:</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder='Enter the description' value={body} onChange={(event) => handleonChange(event, setBody)} />
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default AddNew