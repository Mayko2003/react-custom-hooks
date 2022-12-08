import { useEffect, useState } from "react"


export const useFetch = (url) => {


    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    const getFetch = async () => {

        setState({
            loading: true,
            data: null,
            error: null
        })

        const res = await fetch(url)
        const data = await res.json()

        setState({
            data,
            loading: false,
            error: null
        })
    }

    useEffect(() => {

        getFetch()


        return () => {
            
        }
    }, [url])


    return {
        data: state.data, 
        loading: state.loading, 
        error: state.error 
    }
}
