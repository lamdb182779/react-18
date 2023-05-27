import "../../style/Covid.scss"
import axios from "axios"
import { useState, useEffect, useCallback } from "react"

const Covid = (props) => {
    let [data, setData] = useState([])

    const getInfo = useCallback(async () => {
        let res = await axios.get('https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST')
        console.log(res)
        let rs = res?.data?.detail?.length > 0 ? res.data.detail : []
        console.log(rs)
        setData(rs)
    }, [])

    console.log(data)
    useEffect(() => {
        getInfo()
    }, [])

    return (
        <div className="covid-container">
            <div className="covid-title">
                <h2>COVID19 INFOMATION IN VIETNAM WITH {props.author}</h2>
            </div>
            <div className="covid-content">
                <div className="scroll-table">
                    <table>
                        <tr>
                            <th>STT</th>
                            <th>Khu vực</th>
                            <th>Tổng ca bệnh</th>
                            <th>Số ca tử vong</th>
                            <th>Số ca điều trị</th>
                            <th>Số ca hồi phục</th>
                            <th>Ca bệnh mới</th>
                        </tr>
                        {data && data.length > 0 ?
                            <>
                                {data.map((item, index) => {
                                    return (
                                        <tr>
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
                                    <td colspan="7" style={{ textAlign: 'center' }}>
                                        Không có dữ liệu
                                    </td>
                                </tr>
                            </>
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Covid