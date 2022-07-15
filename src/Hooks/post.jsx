import { useEffect, useState } from 'react'

export default function usePost(url) {
    const [result, setResult] = useState({
        data: [{}],
        isLoaded: false
    })

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setResult({data, isLoaded: true}))
    }, [])

    return result
}