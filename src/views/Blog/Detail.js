import { useParams, useNavigate } from "react-router-dom";
import "../../style/Detail.scss";
import useFetch from "../../custom/fetch";

const Detail = (props) => {
    let { id } = useParams()
    let navigate = useNavigate()
    const { data, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const handleBack = () => {
        navigate('/blog')
    }
    return (
        <div className="detail-container">
            <div className="detail-title">
                <h2>
                    BLOG {id} WITH {props.author}
                </h2>
            </div>
            <div className="detail-content">
                <span onClick={() => handleBack()}>&lt;Back</span>
                {loading === false ?
                    <>
                        {Object.keys(data).length ?
                            <>
                                <div className="detail-blog">
                                    <div className="detail-id">Blog ID {id} post by user ID {data.userId}:</div>
                                    <div className="detail-title">{data.title}</div>
                                    <div className="detail-body">{data.body}</div>
                                </div>
                            </>
                            :
                            <>
                                <div className="detail-nodata">
                                    Không lấy được dữ liệu
                                </div>
                            </>
                        }
                    </>
                    :
                    <>
                        <div className="detail-loading">
                            Đang tải dữ liệu ...
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Detail