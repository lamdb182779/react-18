import { useEffect, useState } from "react"

const CountDown = (props) => {
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
    }, [second, hour])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
            <h2>
                {hour}:{minute}:{second}
            </h2>
        </div>
    )
}

export default CountDown