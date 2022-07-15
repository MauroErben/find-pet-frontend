import React from 'react'
import { VStack, Divider, Text, SimpleGrid } from '@chakra-ui/react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardSkeleton from '../Skeleton'

export default function CardPost({ postList }) {
    if (postList.length > 0) {
        return (
            <SimpleGrid p={[4, 4, 6, 8]} columns={{ sm: 1, md: 2, lg: 3 }} spacing={14}>
                {postList.map(item => (
                    <VStack
                        alignItems='flex-start'
                        borderWidth='1px'
                        shadow='md'
                        padding={4}
                        key={item.id}
                    >
                        <CardSkeleton isLoaded>
                            <CardHeader image={item.postImage} title={item.postTitle} />
                        </CardSkeleton>

                        <CardSkeleton isLoaded>
                            <CardBody
                                body={item.postDescription}
                                time={item.postCreatedAt}
                                location={item.postLocation}
                            />
                        </CardSkeleton>

                        <Divider />

                        <CardSkeleton isLoaded>
                            <CardFooter post={item} />
                        </CardSkeleton>
                    </VStack>
                ))}
            </SimpleGrid>
        )
    }
    return (
        <Text>Loading...</Text>
    )
}