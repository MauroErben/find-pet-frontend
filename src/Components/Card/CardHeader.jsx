import React from 'react'
import { VStack, Image, Heading } from '@chakra-ui/react'

export default function CardHeader({ image, title }) {
    return (
        <VStack
            w='full'
            alignItems='flex-start'
        >
            <Image
                w='full'
                h={[200, 300, 150]}
                src={image}
                objectFit='cover'
                alt='petAlt'
            />
            <Heading as='h1' fontSize='lg'>{title}</Heading>
        </VStack>
    )
}