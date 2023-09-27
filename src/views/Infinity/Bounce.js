import "../../style/Bounce.scss"
import { useState, useEffect } from "react"

const Bounce = (props) => {
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
        elementClass.add("bounce")
        setTimeout(() => {
            setShowHo(ho)
        }, 500)
        setTimeout(() => {
            elementClass.remove("bounce")
        }, 550)
    }, [ho])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elementClass = document.querySelector(".ur").classList
        elementClass.add("bounce")
        setTimeout(() => {
            setShowUr(ur)
        }, 500)
        setTimeout(() => {
            elementClass.remove("bounce")
        }, 550)
    }, [ur])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elementClass = document.querySelector(".min").classList
        elementClass.add("bounce")
        setTimeout(() => {
            setShowMin(min)
        }, 500)
        setTimeout(() => {
            elementClass.remove("bounce")
        }, 550)
    }, [min])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elementClass = document.querySelector(".ute").classList
        elementClass.add("bounce")
        setTimeout(() => {
            setShowUte(ute)
        }, 500)
        setTimeout(() => {
            elementClass.remove("bounce")
        }, 550)
    }, [ute])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elementClass = document.querySelector(".sec").classList
        elementClass.add("bounce")
        setTimeout(() => {
            setShowSec(sec)
        }, 500)
        setTimeout(() => {
            elementClass.remove("bounce")
        }, 550)
    }, [sec])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const elementClass = document.querySelector(".ond").classList
        elementClass.add("bounce")
        setTimeout(() => {
            setShowOnd(ond)
        }, 500)
        setTimeout(() => {
            elementClass.remove("bounce")
        }, 550)
    }, [ond])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="">
            <h2>
                <div className="d-flex justify-content-center">
                    <div className="bounce-number">
                        <div className="bounce-back ho">
                            {ho}
                        </div>
                        <div className="bounce-front">
                            {showHo}
                        </div>
                    </div>
                    <div className="bounce-number">
                        <div className="bounce-back ur">
                            {ur}
                        </div>
                        <div className="bounce-front">
                            {showUr}
                        </div>
                    </div>
                    <div className="colon">:</div>
                    <div className="bounce-number">
                        <div className="bounce-back min">
                            {min}
                        </div>
                        <div className="bounce-front">
                            {showMin}
                        </div>
                    </div>
                    <div className="bounce-number">
                        <div className="bounce-back ute">
                            {ute}
                        </div>
                        <div className="bounce-front">
                            {showUte}
                        </div>
                    </div>
                    <div className="colon">:</div>
                    <div className="bounce-number">
                        <div className="bounce-back sec">
                            {sec}
                        </div>
                        <div className="bounce-front">
                            {showSec}
                        </div>
                    </div>
                    <div className="bounce-number">
                        <div className="bounce-back ond">
                            {ond}
                        </div>
                        <div className="bounce-front">
                            {showOnd}
                        </div>
                    </div>
                </div>
            </h2>
        </div>
    )
}

export default Bounce