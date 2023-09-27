import "../../style/Bloom.scss"

import { useState, useEffect } from "react"

const Bloom = (props) => {
    const date = new Date()
    const [ond, setOnd] = useState(date.getSeconds() % 10)
    const [sec, setSec] = useState(Math.floor(date.getSeconds() / 10))
    const [ute, setUte] = useState(date.getMinutes() % 10)
    const [min, setMin] = useState(Math.floor(date.getMinutes() / 10))
    const [ur, setUr] = useState(date.getHours() % 10)
    const [ho, setHo] = useState(Math.floor(date.getHours() / 10))
    const [showOnd, setShowOnd] = useState(ond)
    const [showSec, setShowSec] = useState(sec)
    const [showUte, setShowUte] = useState(ute)
    const [showMin, setShowMin] = useState(min)
    const [showUr, setShowUr] = useState(ur)
    const [showHo, setShowHo] = useState(ho)
    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            setOnd(date.getSeconds() % 10)
            setSec(Math.floor(date.getSeconds() / 10))
            setUte(date.getMinutes() % 10)
            setMin(Math.floor(date.getMinutes() / 10))
            setUr(date.getHours() % 10)
            setHo(Math.floor(date.getHours() / 10))
        }, 1000)
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".ho")
        setTimeout(() => {
            setShowHo(ho)
        }, 500)
        elements.forEach(element => {
            element.classList.add("bloom")
            setTimeout(() => {
                element.classList.remove("bloom")
            }, 550)
        })
    }, [ho])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".ur")
        setTimeout(() => {
            setShowUr(ur)
        }, 500)
        elements.forEach(element => {
            element.classList.add("bloom")
            setTimeout(() => {
                element.classList.remove("bloom")
            }, 550)
        })
    }, [ur])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".min")
        setTimeout(() => {
            setShowMin(min)
        }, 500)
        elements.forEach(element => {
            element.classList.add("bloom")
            setTimeout(() => {
                element.classList.remove("bloom")
            }, 550)
        })
    }, [min])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".ute")
        setTimeout(() => {
            setShowUte(ute)
        }, 500)
        elements.forEach(element => {
            element.classList.add("bloom")
            setTimeout(() => {
                element.classList.remove("bloom")
            }, 550)
        })
    }, [ute])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".sec")
        setTimeout(() => {
            setShowSec(sec)
        }, 500)
        elements.forEach(element => {
            element.classList.add("bloom")
            setTimeout(() => {
                element.classList.remove("bloom")
            }, 550)
        })
    }, [sec])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".ond")
        setTimeout(() => {
            setShowOnd(ond)
        }, 500)
        elements.forEach(element => {
            element.classList.add("bloom")
            setTimeout(() => {
                element.classList.remove("bloom")
            }, 550)
        })
    }, [ond])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="mt-5">
            <h2>
                <div className="d-flex justify-content-center">
                    <div className="bloom-number">
                        <div className="bloom-back ho">
                            {ho}
                        </div>
                        <div className="bloom-front ho">
                            {showHo}
                        </div>
                    </div>
                    <div className="bloom-number">
                        <div className="bloom-back ur">
                            {ur}
                        </div>
                        <div className="bloom-front ur">
                            {showUr}
                        </div>
                    </div>
                    :
                    <div className="bloom-number">
                        <div className="bloom-back min">
                            {min}
                        </div>
                        <div className="bloom-front min">
                            {showMin}
                        </div>
                    </div>
                    <div className="bloom-number">
                        <div className="bloom-back ute">
                            {ute}
                        </div>
                        <div className="bloom-front ute">
                            {showUte}
                        </div>
                    </div>
                    :
                    <div className="bloom-number">
                        <div className="bloom-back sec">
                            {sec}
                        </div>
                        <div className="bloom-front sec">
                            {showSec}
                        </div>
                    </div>
                    <div className="bloom-number">
                        <div className="bloom-back ond">
                            {ond}
                        </div>
                        <div className="bloom-front ond">
                            {showOnd}
                        </div>
                    </div>
                </div>
            </h2>
        </div>
    )
}

export default Bloom