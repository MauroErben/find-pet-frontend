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

export default function CardFooter() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <HStack
                w='full'
                justifyContent='space-between'
                p={4}
            >
                <Button
                    variant='link'
                    colorScheme='purple'
                >
                    Ver publicación
                </Button>

                <IconButton
                    variant='link'
                    icon={<MdShare size={24} />}
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
                            <FacebookShareButton>
                                <FacebookIcon round size={48} />
                            </FacebookShareButton>

                            <WhatsappShareButton>
                                <WhatsappIcon round size={48} />
                            </WhatsappShareButton>

                            <TwitterShareButton>
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