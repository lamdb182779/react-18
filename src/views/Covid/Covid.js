import "../../style/Covid.scss"
import useFetch from "../../custom/fetch"

const Covid = (props) => {
    const { data, loading } = useFetch('https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST')

    return (
        <div className="covid-container">
            <div className="covid-title">
                <h2>COVID19 INFOMATION IN VIETNAM 2021 WITH {props.author}</h2>
            </div>
            <div className="covid-content">
                <div className="scroll-table">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Khu vực</th>
                                <th>Tổng ca bệnh</th>
                                <th>Số ca tử vong</th>
                                <th>Số ca điều trị</th>
                                <th>Số ca hồi phục</th>
                                <th>Ca bệnh mới</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading === false ?
                                <>
                                    {data?.length > 0 ?
                                        <>
                                            {data.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.cases}</td>
                                                        <td>{item.death}</td>
                                                        <td>{item.treating}</td>
                                                        <td>{item.recovered}</td>
                                                        <td>{item.casesToday}</td>
                                                    </tr>
                                                )
                                            })
                                            }
                                        </>
                                        :
                                        <>
                                            <tr>
                                                <td colSpan="7" style={{ textAlign: 'center' }}>
                                                    Không có lấy được dữ liệu
                                                </td>
                                            </tr>
                                        </>
                                    }
                                </>
                                :
                                <>
                                    <tr>
                                        <td colSpan="7" style={{ textAlign: 'center' }}>
                                            Đang tải dữ liệu ...
                                        </td>
                                    </tr>
                                </>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Covid