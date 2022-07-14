import React from 'react'
import { VStack, HStack, Heading, Text } from '@chakra-ui/react'
import { MdLocationPin, MdAccessTime } from 'react-icons/md'
import moment from 'moment/dist/moment'
import 'moment/dist/locale/es'

export default function CardBody({ title, desc, location, time }) {
    return (
        <VStack
            spacing={2}
            alignItems='flex-start'
            padding={4}
        >
            <Heading fontSize={['large', 'large', 'large', 'x-large']}>{title}</Heading>
            <Text noOfLines={3}>{desc}</Text>
            <HStack
                spacing={1}
            >
                <MdLocationPin color='gray' size={22} />
                <Text>{location}</Text>
            </HStack>
            <HStack
                spacing={1}
            >
                <MdAccessTime color='gray' size={22} />
                <Text>
                    {moment(time).locale('es').fromNow()}
                </Text>
            </HStack>
        </VStack>
    )
}