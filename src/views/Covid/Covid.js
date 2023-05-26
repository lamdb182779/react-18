import "../../style/Covid.scss"
import axios from "axios"
import { useState, useEffect } from "react"

const Covid = (props) => {
    let [data, setData] = useState([])
    useEffect(async () => {
        let res = await axios.get('https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST')
        console.log(res)
        let rs = res && res.data && res.data.detail && res.data.detail.length > 0 ? res.data.detail : []
        console.log(rs)
        setData([...rs])
        console.log(data)
    }, [])

    return (
        <div className="covid-container">
            <div className="covid-content">
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
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.death}</td>
                                    <td>{item.treating}</td>
                                    <td>{item.cases}</td>
                                    <td>{item.recovered}</td>
                                    <td>{item.casesToday}</td>
                                </tr>
                            })
                            }
                        </>
                        :
                        <>
                            <tr>
                                <td>
                                    Không có dữ liệu
                                </td>
                            </tr>
                        </>
                    }
                </table>
            </div>
        </div>
    )
}

export default Covid