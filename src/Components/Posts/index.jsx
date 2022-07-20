import React, { useState, useEffect } from 'react'
import CardPost from '../Card'
import { getAllPost } from '../../Services/Api'

export default function Posts () {
    const [data, setData] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const allPost = await getAllPost()
            setData(allPost) 
        }
        getPosts()
    }, [])

    return(
        <CardPost postData={data} />
    )
}