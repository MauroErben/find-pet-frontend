import React from 'react'
import CardPost from '../Card'
import usePost from '../Hooks/post'

export default function Posts () {
    // Get all post
    const { data, isLoaded } = usePost('http://localhost:3001/posts')
    return(
        <CardPost postData={data} loading={isLoaded} />
    )
}