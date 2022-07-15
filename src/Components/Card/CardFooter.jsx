import React from 'react'
import {
    HStack,
    Button,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { MdShare } from 'react-icons/md'
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon
} from 'react-share'

export default function CardFooter({ post }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <HStack
                w='full'
                justifyContent='space-between'
            >
                <Button
                    variant='link'
                    colorScheme='purple'
                >
                    Ver publicación
                </Button>

                <IconButton
                    variant='link'
                    icon={<MdShare size={22} />}
                    onClick={onOpen}
                />
            </HStack>

            {/* MODAL */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Compartir en redes</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <HStack
                            justifyContent='center'
                            alignItems='center'
                        >
                            <FacebookShareButton
                                url={`http://localhost:3000/${post?.id}`}
                                quote={post?.postTitle}
                                hashtag='#AnimalesMendoza'
                            >
                                <FacebookIcon round size={48} />
                            </FacebookShareButton>

                            <WhatsappShareButton
                                url={`http://localhost:3000/${post?.id}`}
                                title={post?.postTitle}
                            >
                                <WhatsappIcon round size={48} />
                            </WhatsappShareButton>

                            <TwitterShareButton
                                url={`http://localhost:3000/${post?.id}`}
                                title={post?.postTitle}
                            >
                                <TwitterIcon round size={48} />
                            </TwitterShareButton>
                        </HStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' onClick={onClose}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}