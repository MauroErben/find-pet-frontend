import React from 'react'
import { Box, Image } from '@chakra-ui/react'

export default function CardHeader({ image }) {
    return (
        <Box w='full'>
            <Image
                w='full'
                h={[200, 300, 150]}
                src={image}
                objectFit='cover'
                alt='petAlt'
            />
        </Box>
    )
}