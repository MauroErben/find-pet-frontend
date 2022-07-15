import React from 'react'
import { VStack, Image, Heading } from '@chakra-ui/react'

export default function CardHeader({ image, title }) {
    return (
        <VStack
            justifyContent='center'
            alignItems='flex-start'
        >
            <Image
                width='full'
                height={[200, 300, 150]}
                src={image}
                objectFit='cover'
                alt='petAlt'
            />
            <Heading noOfLines={1} as='h1' fontSize='md'>{title}</Heading>
        </VStack>
    )
}