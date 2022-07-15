import React from 'react'
import CardPost from '../Card'
import usePost from '../Hooks/post'

export default function Posts () {
    const { data, isLoaded } = usePost()
    return(
        <CardPost postData={data} loading={isLoaded} />
    )
}