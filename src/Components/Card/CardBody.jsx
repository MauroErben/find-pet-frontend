import React from 'react'
import { VStack, HStack, Text } from '@chakra-ui/react'
import { MdLocationPin, MdAccessTime } from 'react-icons/md'
import moment from 'moment/dist/moment'
import 'moment/dist/locale/es'

export default function CardBody({ body, location, time }) {
    return (
        <VStack
            spacing={2}
            alignItems='flex-start'
            fontSize='sm'
        >
            <Text noOfLines={3}>{body}</Text>
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