import React, { useState } from 'react'
import { HStack, Button, IconButton } from '@chakra-ui/react'
import ShareMenu from '../ShareMenu'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'

export default function CardFooter({ itemToShare }) {

    const [like, setLike] = useState(false)

    const handleLike = () => {
        setLike(!like)
    }

    return (
        <HStack
            justifyContent='space-between'
            width='full'
            padding={4}
        >
            <Button variant='link' colorScheme='purple' size='lg'>
                Ver publicación
            </Button>
            <HStack>
                <IconButton
                    onClick={handleLike}
                    variant='link'
                    icon={
                        like
                            ? <IoMdHeart size={28} color='red' />
                            : <IoMdHeartEmpty size={28} color='gray' />
                    }
                />
                <ShareMenu item={itemToShare}/>
            </HStack>
        </HStack>
    )
}