
import axios from "axios"
import { useState, useEffect } from "react"

const useFetch = (url) => {
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(true)
    const getInfo = async () => {
        try {
            let res = await axios.get(url)
            console.log('res:', res)
            let rs = res?.data?.detail?.length > 0 ? res.data.detail : []
            console.log('rs:', rs)
            setData(rs)
        }
        catch (e) {
            console.log('Error:', e)
        }
        setLoading(false)
    }

    console.log('data:', data)
    useEffect(() => {
        getInfo()
    }, [url])// eslint-disable-line react-hooks/exhaustive-deps

    return {
        data, loading
    }
}

export default useFetch