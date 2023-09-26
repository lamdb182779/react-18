import { useState, useEffect } from "react";
import "../../style/Chart.scss"
import { Pie } from '@ant-design/charts';

const Chart = (props) => {
    const [data, setData] = useState([])
    let [second, setSecond] = useState(59)
    let [minute, setMinute] = useState(59)
    let [hour, setHour] = useState(23)
    useEffect(() => {
        setTimeout(() => {
            setSecond(second - 1)
        }, 1000)
        if (second === -1) {
            setSecond(59)
            setMinute(minute - 1)
        }
        if (minute === -1) {
            setMinute(59)
            setHour(hour - 1)
        }
        if (hour === -1) {
            setHour(23)
        }
        setData([
            {
                type: "second",
                value: second
            },
            {
                type: "minute",
                value: minute
            },
            {
                type: "hour",
                value: hour
            },
        ])
    }, [second, hour])// eslint-disable-line react-hooks/exhaustive-deps
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };

    return <Pie {...config} />
}

export default Chart