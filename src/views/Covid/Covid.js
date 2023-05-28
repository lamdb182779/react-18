import "../../style/Covid.scss"
import axios from "axios"
import { useState, useEffect, useCallback } from "react"

const Covid = (props) => {
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(true)
    const getInfo = useCallback(async () => {
        try {
            let res = await axios.get('https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST')
            console.log('res:', res)
            let rs = res?.data?.detail?.length > 0 ? res.data.detail : []
            console.log('rs:', rs)
            setData(rs)
        }
        catch (e) {
            console.log('Error:', e)
        }
        setLoading(false)
    }, [])

    console.log('data:', data)
    useEffect(() => {
        getInfo()
    }, [])

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