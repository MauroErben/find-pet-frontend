import React from 'react'
import { Skeleton } from '@chakra-ui/react'

export default function CardSkeleton ({ isLoaded = false, children }) {
    return(
        <Skeleton isLoaded={isLoaded} w='full'>
            {children}
        </Skeleton>
    )
}