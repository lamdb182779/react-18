import { useEffect, useState } from "react"
import "../../style/CountDown.scss"

const CountDown = (props) => {
    const [second, setSecond] = useState(59)
    const [sec, setSec] = useState(6)
    const [ond, setOnd] = useState(0)
    const [minute, setMinute] = useState(59)
    const [min, setMin] = useState(6)
    const [ute, setUte] = useState(0)
    const [hour, setHour] = useState(23)
    const [ho, setHo] = useState(2)
    const [ur, setUr] = useState(4)
    useEffect(() => {
        setTimeout(() => {
            if (second !== 0) {
                setSecond(second - 1)
            } else {
                setSecond(59)
                if (minute !== 0) {
                    setMinute(minute - 1)
                } else {
                    setMinute(59)
                    if (hour !== 0) {
                        setHour(hour - 1)
                    } else {
                        setHour(23)
                    }
                }
            }
        }, 1000)
    }, [second, hour])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (ur !== 0)
            setUr(ur - 1)
        else if (ho !== 0) {
            setUr(9)
            setHo(ho - 1)
        } else {
            setUr(2)
            setHo(3)
        }
    }, [hour])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (ute !== 0)
            setUte(ute - 1)
        else if (min !== 0) {
            setUte(9)
            setMin(min - 1)
        } else {
            setMin(5)
            setUte(9)
        }
    }, [minute])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (ond !== 0)
            setOnd(ond - 1)
        else if (sec !== 0) {
            setOnd(9)
            setSec(sec - 1)
        } else {
            setSec(5)
            setOnd(9)
        }
    }, [second])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const spans = document.querySelectorAll(".d1")
        spans[5].classList.add("flip")
        setTimeout(() => {
            spans[5].classList.remove("flip")
        }, 100)
    }, [ond])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const spans = document.querySelectorAll(".d1")
        spans[4].classList.add("flip")
        setTimeout(() => {
            spans[4].classList.remove("flip")
        }, 100)
    }, [sec])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const spans = document.querySelectorAll(".d1")
        spans[3].classList.add("flip")
        setTimeout(() => {
            spans[3].classList.remove("flip")
        }, 100)
    }, [ute])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const spans = document.querySelectorAll(".d1")
        spans[2].classList.add("flip")
        setTimeout(() => {
            spans[2].classList.remove("flip")
        }, 100)
    }, [min])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const spans = document.querySelectorAll(".d1")
        spans[1].classList.add("flip")
        setTimeout(() => {
            spans[1].classList.remove("flip")
        }, 100)
    }, [ur])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const spans = document.querySelectorAll(".d1")
        spans[0].classList.add("flip")
        setTimeout(() => {
            spans[0].classList.remove("flip")
        }, 100)
    }, [ho])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="flip d-flex justify-content-center">
            <h2 className="row d-flex justify-content-center w-25">
                <div className="d col-1">
                    <div className="d1">
                        <span>
                            {ho}</span>
                    </div>
                    <div className="d2">
                        <span>
                            {ho}</span>
                    </div>
                </div>
                <div className="d col-1">
                    <div className="d1">
                        <span>
                            {ur}</span>
                    </div>
                    <div className="d2">
                        <span>
                            {ur}</span>
                    </div>
                </div>
                :
                <div className="d col-1">
                    <div className="d1">
                        <span>
                            {min}</span>
                    </div>
                    <div className="d2">
                        <span>
                            {min}</span>
                    </div>
                </div>
                <div className="d col-1">
                    <div className="d1">
                        <span>
                            {ute}</span>
                    </div>
                    <div className="d2">
                        <span>
                            {ute}</span>
                    </div>
                </div>
                :
                <div className="d col-1">
                    <div className="d1">
                        <span>
                            {sec}</span>
                    </div>
                    <div className="d2">
                        <span>
                            {sec}</span>
                    </div>
                </div>
                <div className="d col-1">
                    <div className="d1">
                        <span>
                            {ond}</span>
                    </div>
                    <div className="d2">
                        <span>
                            {ond}</span>
                    </div>
                </div>
            </h2>
        </div>
    )
}

export default CountDown