import "../../style/Swipe.scss"
import { useState, useEffect } from "react"
const Swipe = (props) => {
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
        const hos = document.querySelectorAll(".ho")
        setTimeout(() => {
            setShowHo(ho)
        }, 500)
        hos.forEach(ho => {
            ho.classList.add("swipe")
            setTimeout(() => {
                ho.classList.remove("swipe")
            }, 550)
        })
    }, [ho])//react-hooks/exhaustive-deps
    useEffect(() => {
        const urs = document.querySelectorAll(".ur")
        setTimeout(() => {
            setShowUr(ur)
        }, 500)
        urs.forEach(ur => {
            ur.classList.add("swipe")
            setTimeout(() => {
                ur.classList.remove("swipe")
            }, 550)
        })
    }, [ur])//react-hooks/exhaustive-deps
    useEffect(() => {
        const mins = document.querySelectorAll(".min")
        setTimeout(() => {
            setShowMin(min)
        }, 500)
        mins.forEach(min => {
            min.classList.add("swipe")
            setTimeout(() => {
                min.classList.remove("swipe")
            }, 550)
        })
    }, [min])//react-hooks/exhaustive-deps
    useEffect(() => {
        const utes = document.querySelectorAll(".ute")
        setTimeout(() => {
            setShowUte(ute)
        }, 500)
        utes.forEach(ute => {
            ute.classList.add("swipe")
            setTimeout(() => {
                ute.classList.remove("swipe")
            }, 550)
        })
    }, [ute])//react-hooks/exhaustive-deps
    useEffect(() => {
        const secs = document.querySelectorAll(".sec")
        setTimeout(() => {
            setShowSec(sec)
        }, 500)
        secs.forEach(sec => {
            sec.classList.add("swipe")
            setTimeout(() => {
                sec.classList.remove("swipe")
            }, 550)
        })
    }, [sec])//react-hooks/exhaustive-deps
    useEffect(() => {
        const onds = document.querySelectorAll(".ond")
        setTimeout(() => {
            setShowOnd(ond)
        }, 500)
        onds.forEach(ond => {
            ond.classList.add("swipe")
            setTimeout(() => {
                ond.classList.remove("swipe")
            }, 550)
        })
    }, [ond])//react-hooks/exhaustive-deps
    return (
        <div className="fs-3">
            <h2>
                <div className="w-100 d-flex justify-content-center">
                    <div className="swipe-number">
                        <div className="swipe-top ho">
                            {ho}
                        </div>
                        <div className="swipe-show ho">
                            {showHo}
                        </div>
                    </div>
                    <div className="swipe-number">
                        <div className="swipe-top ur">
                            {ur}
                        </div>
                        <div className="swipe-show ur">
                            {showUr}
                        </div>
                    </div>
                    :
                    <div className="swipe-number">
                        <div className="swipe-top min">
                            {min}
                        </div>
                        <div className="swipe-show min">
                            {showMin}
                        </div>
                    </div>
                    <div className="swipe-number">
                        <div className="swipe-top ute">
                            {ute}
                        </div>
                        <div className="swipe-show ute">
                            {showUte}
                        </div>
                    </div>
                    :
                    <div className="swipe-number">
                        <div className="swipe-top sec">
                            {sec}
                        </div>
                        <div className="swipe-show sec">
                            {showSec}
                        </div>
                    </div>
                    <div className="swipe-number">
                        <div className="swipe-top ond">
                            {ond}
                        </div>
                        <div className="swipe-show ond">
                            {showOnd}
                        </div>
                    </div>
                </div>
            </h2>
        </div>
    )
}

export default Swipe