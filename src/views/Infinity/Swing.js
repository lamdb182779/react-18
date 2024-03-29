import "../../style/Swing.scss"
import { useState, useEffect } from "react"

const Swing = (props) => {
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
            element.classList.add("swing")
            setTimeout(() => {
                element.classList.remove("swing")
            }, 550)
        })
    }, [ho])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".ur")
        setTimeout(() => {
            setShowUr(ur)
        }, 500)
        elements.forEach(element => {
            element.classList.add("swing")
            setTimeout(() => {
                element.classList.remove("swing")
            }, 550)
        })
    }, [ur])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".min")
        setTimeout(() => {
            setShowMin(min)
        }, 500)
        elements.forEach(element => {
            element.classList.add("swing")
            setTimeout(() => {
                element.classList.remove("swing")
            }, 550)
        })
    }, [min])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".ute")
        setTimeout(() => {
            setShowUte(ute)
        }, 500)
        elements.forEach(element => {
            element.classList.add("swing")
            setTimeout(() => {
                element.classList.remove("swing")
            }, 550)
        })
    }, [ute])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".sec")
        setTimeout(() => {
            setShowSec(sec)
        }, 500)
        elements.forEach(element => {
            element.classList.add("swing")
            setTimeout(() => {
                element.classList.remove("swing")
            }, 550)
        })
    }, [sec])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elements = document.querySelectorAll(".ond")
        setTimeout(() => {
            setShowOnd(ond)
        }, 500)
        elements.forEach(element => {
            element.classList.add("swing")
            setTimeout(() => {
                element.classList.remove("swing")
            }, 550)
        })
    }, [ond])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="mt-5">
            <h2>
                <div className="d-flex justify-content-center">
                    <div className="swing-number">
                        <div className="swing-right ho">
                            <div className="bg-secondary">
                                {ho}
                            </div>
                            <div className="" />
                        </div>
                        <div className="swing-top ho">
                            <div className="bg-secondary">
                                {showHo}
                            </div>
                            <div className="" />
                        </div>
                    </div>
                    <div className="swing-number">
                        <div className="swing-right ur">
                            <div className="bg-secondary">
                                {ur}
                            </div>
                            <div className="" />
                        </div>
                        <div className="swing-top ur">
                            <div className="bg-secondary">
                                {showUr}
                            </div>
                            <div className="" />
                        </div>
                    </div>
                    :
                    <div className="swing-number">
                        <div className="swing-right min">
                            <div className="bg-secondary">
                                {min}
                            </div>
                            <div className="" />
                        </div>
                        <div className="swing-top min">
                            <div className="bg-secondary">
                                {showMin}
                            </div>
                            <div className="" />
                        </div>
                    </div>
                    <div className="swing-number">
                        <div className="swing-right ute">
                            <div className="bg-secondary">
                                {ute}
                            </div>
                            <div className="" />
                        </div>
                        <div className="swing-top ute">
                            <div className="bg-secondary">
                                {showUte}
                            </div>
                            <div className="" />
                        </div>
                    </div>
                    :
                    <div className="swing-number">
                        <div className="swing-right sec">
                            <div className="bg-secondary">
                                {sec}
                            </div>
                            <div className="" />
                        </div>
                        <div className="swing-top sec">
                            <div className="bg-secondary">
                                {showSec}
                            </div>
                            <div className="" />
                        </div>
                    </div>
                    <div className="swing-number">
                        <div className="swing-right ond">
                            <div className="bg-secondary">
                                {ond}
                            </div>
                            <div className="" />
                        </div>
                        <div className="swing-top ond">
                            <div className="bg-secondary">
                                {showOnd}
                            </div>
                            <div className="" />
                        </div>
                    </div>
                </div>
            </h2>
        </div>
    )
}

export default Swing