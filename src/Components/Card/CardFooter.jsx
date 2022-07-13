import React, { useState } from 'react'
import { HStack, Button, IconButton } from '@chakra-ui/react'
import { MdOutlineShare } from 'react-icons/md'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'

export default function CardFooter() {

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

                <IconButton
                    variant='link'
                    icon={<MdOutlineShare size={28} color='gray' />}
                />
            </HStack>
        </HStack>
    )
}