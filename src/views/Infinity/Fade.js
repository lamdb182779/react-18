import "../../style/Fade.scss"
import { useState, useEffect } from "react"
const Fade = (props) => {
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
        }, 3000)
        elements.forEach(element => {
            element.classList.add("fade-slow")
            setTimeout(() => {
                element.classList.remove("fade-slow")
            }, 3100)
        })
    }, [ho])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".ur")
        setTimeout(() => {
            setShowUr(ur)
        }, 3000)
        elements.forEach(element => {
            element.classList.add("fade-slow")
            setTimeout(() => {
                element.classList.remove("fade-slow")
            }, 3100)
        })
    }, [ur])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".min")
        setTimeout(() => {
            setShowMin(min)
        }, 3000)
        elements.forEach(element => {
            element.classList.add("fade-slow")
            setTimeout(() => {
                element.classList.remove("fade-slow")
            }, 3100)
        })
    }, [min])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".ute")
        setTimeout(() => {
            setShowUte(ute)
        }, 3000)
        elements.forEach(element => {
            element.classList.add("fade-slow")
            setTimeout(() => {
                element.classList.remove("fade-slow")
            }, 3100)
        })
    }, [ute])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".sec")
        setTimeout(() => {
            setShowSec(sec)
        }, 3000)
        elements.forEach(element => {
            element.classList.add("fade-slow")
            setTimeout(() => {
                element.classList.remove("fade-slow")
            }, 3100)
        })
    }, [sec])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".ond")
        setTimeout(() => {
            setShowOnd(ond)
        }, 900)
        elements.forEach(element => {
            element.classList.add("fade")
            setTimeout(() => {
                element.classList.remove("fade")
            }, 950)
        })
    }, [ond])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="mt-5">
            <h2>
                <div className="d-flex justify-content-center">
                    <div className="fade-number">
                        <div className="fade-hide ho">
                            {ho}
                        </div>
                        <div className="fade-show ho">
                            {showHo}
                        </div>
                    </div>
                    <div className="fade-number">
                        <div className="fade-hide ur">
                            {ur}
                        </div>
                        <div className="fade-show ur">
                            {showUr}
                        </div>
                    </div>
                    :
                    <div className="fade-number">
                        <div className="fade-hide min">
                            {min}
                        </div>
                        <div className="fade-show min">
                            {showMin}
                        </div>
                    </div>
                    <div className="fade-number">
                        <div className="fade-hide ute">
                            {ute}
                        </div>
                        <div className="fade-show ute">
                            {showUte}
                        </div>
                    </div>
                    :
                    <div className="fade-number">
                        <div className="fade-hide sec">
                            {sec}
                        </div>
                        <div className="fade-show sec">
                            {showSec}
                        </div>
                    </div>
                    <div className="fade-number">
                        <div className="fade-hide ond">
                            {ond}
                        </div>
                        <div className="fade-show ond">
                            {showOnd}
                        </div>
                    </div>
                </div>
            </h2>
        </div>
    )
}

export default Fade