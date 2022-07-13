import React from 'react'
import { HStack, Image, Text } from '@chakra-ui/react'

export default function CardAvatar ({ image, name }) {
    return(
        <HStack
            mt={8}
        >
            <Image boxSize='40px' rounded='full' src={image} />
            <Text>{name}</Text>
        </HStack>
    )
}