import "../../style/Flip.scss"
import { useState, useEffect } from "react"
const Flip = (props) => {
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
            element.classList.add("flip")
            setTimeout(() => {
                element.classList.remove("flip")
            }, 550)
        })
    }, [ho])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".ur")
        setTimeout(() => {
            setShowUr(ur)
        }, 500)
        elements.forEach(element => {
            element.classList.add("flip")
            setTimeout(() => {
                element.classList.remove("flip")
            }, 550)
        })
    }, [ur])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".min")
        setTimeout(() => {
            setShowMin(min)
        }, 500)
        elements.forEach(element => {
            element.classList.add("flip")
            setTimeout(() => {
                element.classList.remove("flip")
            }, 550)
        })
    }, [min])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".ute")
        setTimeout(() => {
            setShowUte(ute)
        }, 500)
        elements.forEach(element => {
            element.classList.add("flip")
            setTimeout(() => {
                element.classList.remove("flip")
            }, 550)
        })
    }, [ute])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".sec")
        setTimeout(() => {
            setShowSec(sec)
        }, 500)
        elements.forEach(element => {
            element.classList.add("flip")
            setTimeout(() => {
                element.classList.remove("flip")
            }, 550)
        })
    }, [sec])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".ond")
        setTimeout(() => {
            setShowOnd(ond)
        }, 500)
        elements.forEach(element => {
            element.classList.add("flip")
            setTimeout(() => {
                element.classList.remove("flip")
            }, 550)
        })
    }, [ond])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="mt-5">
            <h2>
                <div className="w-100 d-flex justify-content-center">
                    <div className="flip-number">
                        <div className="flip-front ho">
                            <div>
                                {showHo}
                            </div>
                        </div>
                        <div className="flip-back ho">
                            <div>
                                {ho}
                            </div>
                        </div>
                        <div className="flip-top">
                            <div>
                                {ho}
                            </div>
                        </div>
                        <div className="flip-bottom">
                            <div>
                                {showHo}
                            </div>
                        </div>
                    </div>
                    <div className="flip-number">
                        <div className="flip-front ur">
                            <div>
                                {showUr}
                            </div>
                        </div>
                        <div className="flip-back ur">
                            <div>
                                {ur}
                            </div>
                        </div>
                        <div className="flip-top">
                            <div>
                                {ur}
                            </div>
                        </div>
                        <div className="flip-bottom">
                            <div>
                                {showUr}
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flip-number">
                        <div className="flip-front min">
                            <div>
                                {showMin}
                            </div>
                        </div>
                        <div className="flip-back min">
                            <div>
                                {min}
                            </div>
                        </div>
                        <div className="flip-top">
                            <div>
                                {min}
                            </div>
                        </div>
                        <div className="flip-bottom">
                            <div>
                                {showMin}
                            </div>
                        </div>
                    </div>
                    <div className="flip-number">
                        <div className="flip-front ute">
                            <div>
                                {showUte}
                            </div>
                        </div>
                        <div className="flip-back ute">
                            <div>
                                {ute}
                            </div>
                        </div>
                        <div className="flip-top">
                            <div>
                                {ute}
                            </div>
                        </div>
                        <div className="flip-bottom">
                            <div>
                                {showUte}
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flip-number">
                        <div className="flip-front sec">
                            <div>
                                {showSec}
                            </div>
                        </div>
                        <div className="flip-back sec">
                            <div>
                                {sec}
                            </div>
                        </div>
                        <div className="flip-top">
                            <div>
                                {sec}
                            </div>
                        </div>
                        <div className="flip-bottom">
                            <div>
                                {showSec}
                            </div>
                        </div>
                    </div>
                    <div className="flip-number">
                        <div className="flip-front ond">
                            <div>
                                {showOnd}
                            </div>
                        </div>
                        <div className="flip-back ond">
                            <div>
                                {ond}
                            </div>
                        </div>
                        <div className="flip-top">
                            <div>
                                {ond}
                            </div>
                        </div>
                        <div className="flip-bottom">
                            <div>
                                {showOnd}
                            </div>
                        </div>
                    </div>
                </div>
            </h2>
        </div>
    )
}

export default Flip