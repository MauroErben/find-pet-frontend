import React from 'react'
import { VStack, Divider, SimpleGrid } from '@chakra-ui/react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardSkeleton from '../Skeleton'

export default function CardPost({ postData, loading }) {
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
                    <CardSkeleton isLoaded={loading} >
                        <CardHeader image={item.image} title={item.title} />
                    </CardSkeleton>

                    <CardSkeleton isLoaded={loading} >
                        <CardBody
                            body={item.description}
                            time={item.createdAt}
                            location={item.location}
                        />
                    </CardSkeleton>

                    <Divider />

                    <CardSkeleton isLoaded={loading} >
                        <CardFooter post={item} />
                    </CardSkeleton>
                </VStack>
            ))}
        </SimpleGrid>
    )
}