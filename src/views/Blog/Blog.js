import useFetch from "../../custom/fetch"
import "../../style/Blog.scss"
import { Link } from "react-router-dom"

const Blog = (props) => {
    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')
    let topTen = data?.length > 0 ? data.slice(0, 20) : data
    return (
        <div className="blog-container">
            <div className="blog-title">
                <h2>
                    MY BLOG WITH {props.author}
                </h2>
            </div>
            <div className="blog-content">
                {loading === false ?
                    <>
                        {topTen?.length > 0 ?
                            <>
                                <div className="blog-grid">
                                    {topTen.map((item, index) => {
                                        return (
                                            <div className="item-blog" key={index}>
                                                <div className="item-title">
                                                    <Link to={`/blog/${item.id}`}>{item.title}</Link>
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
    )
}

export default Blog