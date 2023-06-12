import useFetch from "../../custom/fetch"
import "../../style/Blog.scss"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import AddNew from "./AddNew";
import { toast } from "react-toastify";

const Blog = (props) => {
    let [showAdd, setShowAdd] = useState(false)
    let [showConfirm, setShowConfirm] = useState(false)
    let [save, setSave] = useState(false)
    let [topTwenty, setTopTwenty] = useState([])
    let [del, setDel] = useState(-1)
    const chunkSize = 4
    const splitArr = (arr, chunk) => {
        let len = arr.length
        while (len / chunk < len % chunk) {
            chunk--
        }
        let tempArr = []
        let rem = len % chunk
        let i = 0
        for (i; i < rem * (chunk + 1); i += (chunk + 1)) {
            let myChunk = arr.slice(i, i + chunk + 1);
            tempArr.push(myChunk);
        }
        for (; i < len; i += chunk) {
            let myChunk = arr.slice(i, i + chunk);
            tempArr.push(myChunk);
        }
        console.log(tempArr)
        return tempArr
    }
    const handleShow = (setShow) => {
        setShow(true)
    }
    const handleClose = (setShow) => {
        setShow(false)
    }

    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')
    useEffect(() => {
        let res = data?.length > 0 ? data.slice(0, 20) : data
        res = splitArr(res, chunkSize)
        setTopTwenty(res)
    }, [data])// eslint-disable-line react-hooks/exhaustive-deps

    const handleSaveChanges = () => {
        setSave(true)
    }

    const handleDelete = (id) => {
        let res = topTwenty.flat()
        res = res.filter(item => item.id !== id)
        res = splitArr(res, chunkSize)
        setTopTwenty(res)
        handleClose(setShowConfirm)
        toast.success('Delete Complete!')
    }

    const handleConfirm = (id) => {
        handleShow(setShowConfirm)
        setDel(id)
    }

    const updateTopTwenty = (blog) => {
        if (blog) {
            let res = topTwenty.flat()
            res.unshift(blog)
            res = splitArr(res, chunkSize)
            setTopTwenty(res)
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
                                    <Container className="blog-grid">
                                        {topTwenty.map((row, rowId) => {
                                            return (
                                                <Row key={rowId}>
                                                    {row.map((item, index) => {
                                                        return (
                                                            <Col key={index}>
                                                                <div className="item-blog">
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
                                                            </Col>
                                                        )
                                                    })
                                                    }
                                                </Row>
                                            )
                                        })
                                        }
                                    </Container>
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