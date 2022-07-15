import { useEffect, useState } from 'react'

export default function usePost() {
    const [result, setResult] = useState({
        data: [],
        isLoaded: false
    })

    useEffect(() => {
        fetch('http://localhost:3001/posts')
            .then(res => res.json())
            .then(data => setResult({data, isLoaded: true}))
    }, [])

    return result
}