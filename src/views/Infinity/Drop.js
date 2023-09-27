import "../../style/Drop.scss"

import { useEffect, useState } from "react"

const Drop = (props) => {
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
        const elementClass = document.querySelector(".ho").classList
        elementClass.add("drop")
        setTimeout(() => {
            setShowHo(ho)
        }, 500)
        setTimeout(() => {
            elementClass.remove("drop")
        }, 550)
    }, [ho])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elementClass = document.querySelector(".ur").classList
        elementClass.add("drop")
        setTimeout(() => {
            setShowUr(ur)
        }, 500)
        setTimeout(() => {
            elementClass.remove("drop")
        }, 550)
    }, [ur])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elementClass = document.querySelector(".min").classList
        elementClass.add("drop")
        setTimeout(() => {
            setShowMin(min)
        }, 500)
        setTimeout(() => {
            elementClass.remove("drop")
        }, 550)
    }, [min])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elementClass = document.querySelector(".ute").classList
        elementClass.add("drop")
        setTimeout(() => {
            setShowUte(ute)
        }, 500)
        setTimeout(() => {
            elementClass.remove("drop")
        }, 550)
    }, [ute])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elementClass = document.querySelector(".sec").classList
        elementClass.add("drop")
        setTimeout(() => {
            setShowSec(sec)
        }, 500)
        setTimeout(() => {
            elementClass.remove("drop")
        }, 550)
    }, [sec])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elementClass = document.querySelector(".ond").classList
        elementClass.add("drop")
        setTimeout(() => {
            setShowOnd(ond)
        }, 500)
        setTimeout(() => {
            elementClass.remove("drop")
        }, 550)
    }, [ond])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="mt-5">
            <h2>
                <div className="d-flex justify-content-center">
                    <div className="drop-number">
                        <div className="drop-back">
                            {ho}
                        </div>
                        <div className="drop-front ho">
                            {showHo}
                        </div>
                    </div>
                    <div className="drop-number">
                        <div className="drop-back">
                            {ur}
                        </div>
                        <div className="drop-front ur">
                            {showUr}
                        </div>
                    </div>
                    :
                    <div className="drop-number">
                        <div className="drop-back">
                            {min}
                        </div>
                        <div className="drop-front min">
                            {showMin}
                        </div>
                    </div>
                    <div className="drop-number">
                        <div className="drop-back">
                            {ute}
                        </div>
                        <div className="drop-front ute">
                            {showUte}
                        </div>
                    </div>
                    :
                    <div className="drop-number">
                        <div className="drop-back">
                            {sec}
                        </div>
                        <div className="drop-front sec">
                            {showSec}
                        </div>
                    </div>
                    <div className="drop-number">
                        <div className="drop-back">
                            {ond}
                        </div>
                        <div className="drop-front ond">
                            {showOnd}
                        </div>
                    </div>
                </div>
            </h2>
        </div>
    )
}

export default Drop