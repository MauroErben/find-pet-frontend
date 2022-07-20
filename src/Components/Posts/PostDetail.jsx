import React, { useState, useEffect } from 'react';
import { VStack, Image, Heading, Text, Box, HStack, Button, SimpleGrid, Divider } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../Services/Api';
import { MdLocationPin, MdPhone, MdRemoveRedEye } from 'react-icons/md'

export default function PostDetail() {
    const { id } = useParams()
    const [detail, setDetail] = useState({})

    useEffect(() => {
        const getPostData = async () => {
            const postDetail = await getPostById(id) 
            setDetail(postDetail)
            // Cambiamos el titulo de la página
            document.title = postDetail.title
        }
        getPostData()
    }, [])

    return (
        Object.keys(detail).length > 0 ?
            <VStack
                position='relative'
            >
                <Image
                    width='full'
                    maxH={[300, 400, 600]}
                    objectFit='cover'
                    src={detail.image}
                    cursor='pointer'
                />
                <VStack
                    maxWidth={['full', 'full', 600]}
                    bg='white'
                    spacing={8}
                    alignItems={['flex-start', 'flex-start', 'center', 'center']}
                    p={[4, 4, 6, 8]}
                    borderWidth='1px'
                    boxShadow='md'
                    position='absolute'
                    top={['100%', '100%', '60%', '60%']}
                >
                    <Box textAlign='center' >
                        <Heading size='lg'>{detail.title}</Heading>
                        <Text mt={4}>{detail.description}</Text>
                    </Box>

                    <SimpleGrid
                        columns={[1, 1, 2, 2]}
                        spacing={8}
                    >
                        <HStack

                        >
                            <MdLocationPin size={22} />
                            <Text>{detail.location}</Text>
                        </HStack>

                        <HStack>
                            <MdPhone size={22} />
                            <Text>{detail.phone_contact}</Text>
                        </HStack>

                        <HStack>
                            <MdRemoveRedEye size={22} />
                            <Text>{detail.views} Views</Text>
                        </HStack>

                        <HStack>
                            <Image
                                boxSize={6}
                                borderRadius='full'
                                src='https://comofuncionaque.com/wp-content/uploads/2015/05/La-persona-es-un-ser-capaz-de-pensar-razonar-tener-sentimientos-y-emociones.jpg.jpg'
                                objectFit='cover'
                            />
                            <Text>By Martin Acosta</Text>
                        </HStack>
                    </SimpleGrid>
                    <Divider />
                    <Button
                        colorScheme='blue'
                    >
                        Editar publicación
                    </Button>
                </VStack>
            </VStack>
            :
            <Text>Cargando...</Text>
    )
}