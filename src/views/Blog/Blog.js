import useFetch from "../../custom/fetch"
import "../../style/Blog.scss"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import AddNew from "./AddNew";
import { toast } from "react-toastify";

const Blog = (props) => {
    let [showAdd, setShowAdd] = useState(false)
    let [showConfirm, setShowConfirm] = useState(false)
    let [save, setSave] = useState(false)
    let [topTwenty, setTopTwenty] = useState([])
    let [del, setDel] = useState(-1)
    const handleShow = (setShow) => {
        setShow(true)
    }
    const handleClose = (setShow) => {
        setShow(false)
    }

    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')
    useEffect(() => {
        setTopTwenty(data?.length > 0 ? data.slice(0, 20) : data)
    }, [data])// eslint-disable-line react-hooks/exhaustive-deps

    const handleSaveChanges = () => {
        setSave(true)
    }

    const handleDelete = (id) => {
        let data = topTwenty
        data = data.filter(item => item.id !== id)
        setTopTwenty(data)
        handleClose(setShowConfirm)
        toast.success('Delete Complete!')
    }

    const handleConfirm = (id) => {
        handleShow(setShowConfirm)
        setDel(id)
    }

    const updateTopTwenty = (blog) => {
        if (blog) {
            let data = topTwenty
            data.unshift(blog)
            setTopTwenty(data)
        }
        setSave(false)
        handleClose(setShowAdd)
    }

    return (
        <>
            <div className="blog-container">
                <div className="blog-title">
                    <h2>
                        MY BLOG WITH {props.author}
                    </h2>
                    <Button variant="primary" onClick={() => handleShow(setShowAdd)}>Add new blog</Button>
                </div>
                <div className="blog-content">
                    {loading === false ?
                        <>
                            {topTwenty?.length > 0 ?
                                <>
                                    <div className="blog-grid">
                                        {topTwenty.map((item, index) => {
                                            return (
                                                <div className="item-blog" key={index}>
                                                    <div className="item-title">
                                                        <div className="item-link">
                                                            <Link to={`/blog/${item.id}`}>{item.title}</Link>
                                                        </div>
                                                        <div className="item-delete" onClick={() => handleConfirm(item.id)}>
                                                            X
                                                        </div>
                                                    </div>
                                                    <div className="item-body">
                                                        {item.body}
                                                    </div>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                </>
                                :
                                <>
                                    <div className="blog-nodata">
                                        Không có blog nào
                                    </div>
                                </>
                            }
                        </>
                        :
                        <>
                            <div className="blog-loading">
                                Đang tải dữ liệu
                            </div>
                        </>
                    }
                </div>
            </div>
            <Modal size="lg" show={showAdd} onHide={() => handleClose(setShowAdd)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNew author={props.author} save={save} updateTopTwenty={updateTopTwenty} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose(setShowAdd)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleSaveChanges() }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={showConfirm} onHide={() => handleClose(setShowConfirm)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure to delete this blog?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose(setShowConfirm)}>
                        No
                    </Button>
                    <Button variant="primary" onClick={() => handleDelete(del)}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Blog