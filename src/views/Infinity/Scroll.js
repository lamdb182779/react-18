import { useEffect, useState } from "react"
import "../../style/Scroll.scss"
const Scroll = (props) => {
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
        const randomClass = document.querySelector(".ond").classList
        randomClass.add("scroll")
        setTimeout(() => {
            setShowOnd(ond)
        }, 500)
        setTimeout(() => {
            randomClass.remove("scroll")
        }, 550)
    }, [ond])//react-hooks/exhaustive-deps
    useEffect(() => {
        const randomClass = document.querySelector(".sec").classList
        randomClass.add("scroll")
        setTimeout(() => {
            setShowSec(sec)
        }, 500)
        setTimeout(() => {
            randomClass.remove("scroll")
        }, 550)
    }, [sec])//react-hooks/exhaustive-deps
    useEffect(() => {
        const randomClass = document.querySelector(".ute").classList
        randomClass.add("scroll")
        setTimeout(() => {
            setShowUte(ute)
        }, 500)
        setTimeout(() => {
            randomClass.remove("scroll")
        }, 550)
    }, [ute])//react-hooks/exhaustive-deps
    useEffect(() => {
        const randomClass = document.querySelector(".min").classList
        randomClass.add("scroll")
        setTimeout(() => {
            setShowMin(min)
        }, 500)
        setTimeout(() => {
            randomClass.remove("scroll")
        }, 550)
    }, [min])//react-hooks/exhaustive-deps
    useEffect(() => {
        const randomClass = document.querySelector(".ur").classList
        randomClass.add("scroll")
        setTimeout(() => {
            setShowUr(ur)
        }, 500)
        setTimeout(() => {
            randomClass.remove("scroll")
        }, 550)
    }, [ur])//react-hooks/exhaustive-deps
    useEffect(() => {
        const randomClass = document.querySelector(".ho").classList
        randomClass.add("scroll")
        setTimeout(() => {
            setShowHo(ho)
        }, 500)
        setTimeout(() => {
            randomClass.remove("scroll")
        }, 550)
    }, [ho])//react-hooks/exhaustive-deps
    return (
        <div className="">
            <h2>
                <div className="w-100 d-flex justify-content-center">
                    <div className="scroll-number">
                        <div className="d-flex random ho">
                            {ho}
                        </div>
                        <div className="d-flex show">
                            {showHo}
                        </div>
                    </div>
                    <div className="scroll-number">
                        <div className="d-flex random ur">
                            {ur}
                        </div>
                        <div className="d-flex show">
                            {showUr}
                        </div>
                    </div>
                    :
                    <div className="scroll-number">
                        <div className="d-flex random min">
                            {min}
                        </div>
                        <div className="d-flex show">
                            {showMin}
                        </div>
                    </div>
                    <div className="scroll-number">
                        <div className="d-flex random ute">
                            {ute}
                        </div>
                        <div className="d-flex show">
                            {showUte}
                        </div>
                    </div>
                    :
                    <div className="scroll-number">
                        <div className="d-flex random sec">
                            {sec}
                        </div>
                        <div className="d-flex show">
                            {showSec}
                        </div>
                    </div>
                    <div className="scroll-number">
                        <div className="d-flex random ond">
                            {ond}
                        </div>
                        <div className="d-flex show">
                            {showOnd}
                        </div>
                    </div>
                </div>
            </h2>
        </div>
    )
}

export default Scroll