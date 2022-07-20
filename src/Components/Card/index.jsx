import React from 'react'
import { VStack, Divider, SimpleGrid } from '@chakra-ui/react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

export default function CardPost({ postData }) {
    return (
        <SimpleGrid p={[4, 4, 6, 8]} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={8}>
            {postData.map((item, index) => (
                <VStack
                    key={index}
                    justifyContent='center'
                    alignItems='center'
                    borderWidth='1px'
                    shadow='md'
                    p={4}
                >
                    <CardHeader image={item.image} title={item.title} />

                    <CardBody
                        body={item.description}
                        time={item.createdAt}
                        location={item.location}
                    />

                    <Divider />

                    <CardFooter post={item} />
                </VStack>
            ))}
        </SimpleGrid>
    )
}