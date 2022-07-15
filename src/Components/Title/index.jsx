import React from 'react'
import { Heading } from '@chakra-ui/react'

export default function Title ({ children }) {
    return(
        <Heading
            p={[4, 4, 6, 6]}
            size={'lg'}
            textAlign={['center', 'center', 'start', 'start']}
        >
            {children}
        </Heading>
    )
}