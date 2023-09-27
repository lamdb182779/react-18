import "../../style/Slide.scss"

import { useState, useEffect } from "react"

const Slide = (props) => {
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
        }, 550)
        elements.forEach(element => {
            element.classList.add("slide")
            setTimeout(() => {
                element.classList.remove("slide")
            }, 550)
        })
    }, [ho])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".ur")
        setTimeout(() => {
            setShowUr(ur)
        }, 550)
        elements.forEach(element => {
            element.classList.add("slide")
            setTimeout(() => {
                element.classList.remove("slide")
            }, 550)
        })
    }, [ur])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".min")
        setTimeout(() => {
            setShowMin(min)
        }, 550)
        elements.forEach(element => {
            element.classList.add("slide")
            setTimeout(() => {
                element.classList.remove("slide")
            }, 550)
        })
    }, [min])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".ute")
        setTimeout(() => {
            setShowUte(ute)
        }, 550)
        elements.forEach(element => {
            element.classList.add("slide")
            setTimeout(() => {
                element.classList.remove("slide")
            }, 550)
        })
    }, [ute])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".sec")
        setTimeout(() => {
            setShowSec(sec)
        }, 550)
        elements.forEach(element => {
            element.classList.add("slide")
            setTimeout(() => {
                element.classList.remove("slide")
            }, 550)
        })
    }, [sec])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".ond")
        setTimeout(() => {
            setShowOnd(ond)
        }, 550)
        elements.forEach(element => {
            element.classList.add("slide")
            setTimeout(() => {
                element.classList.remove("slide")
            }, 550)
        })
    }, [ond])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="mt-5">
            <h2>
                <div className="d-flex justify-content-center">
                    <div className="slide-number">
                        <div className="slide-show ho">
                            {showHo}
                        </div>
                        <div className="slide-hide ho">
                            {ho}
                        </div>
                    </div>
                    <div className="slide-number">
                        <div className="slide-show ur">
                            {showUr}
                        </div>
                        <div className="slide-hide ur">
                            {ur}
                        </div>
                    </div>
                    :
                    <div className="slide-number">
                        <div className="slide-show min">
                            {showMin}
                        </div>
                        <div className="slide-hide min">
                            {min}
                        </div>
                    </div>
                    <div className="slide-number">
                        <div className="slide-show ute">
                            {showUte}
                        </div>
                        <div className="slide-hide ute">
                            {ute}
                        </div>
                    </div>
                    :
                    <div className="slide-number">
                        <div className="slide-show sec">
                            {showSec}
                        </div>
                        <div className="slide-hide sec">
                            {sec}
                        </div>
                    </div>
                    <div className="slide-number">
                        <div className="slide-show ond">
                            {showOnd}
                        </div>
                        <div className="slide-hide ond">
                            {ond}
                        </div>
                    </div>
                </div>
            </h2>
        </div>
    )
}

export default Slide