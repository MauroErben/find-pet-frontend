import React from 'react'
import {
    Stack,
    VStack,
    Heading,
    Text,
    Image,
    InputGroup,
    Input,
    Textarea,
    Select,
    Button,
    FormControl,
    InputLeftElement,
    FormErrorMessage,
    InputLeftAddon,
    FormHelperText
} from '@chakra-ui/react'
import FormHeader from '../FormHeader'
import { MdTitle, MdImage } from 'react-icons/md'
import { useFormik } from 'formik'
import { postScheme } from './PostScheme'

export default function PostForm() {

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: '',
            description: '',
            location: '',
            image: '',
            phone: '',
        },
        validationSchema: postScheme,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
                alert(JSON.stringify(values))
                setSubmitting(false)
                resetForm()
            }, 400);
        }
    })

    return (
        <Stack
            justifyContent='center'
            alignItems='center'
            spacing={4}
            padding={[4, 4, 6, 8]}
        >
            {/* HEADER */}
            <FormHeader
                title='Crear publicación'
                subtitle='Creá una publicación y aumentá las probabilidades de encontrar a tu mascota.'
            />
            
            {/* BODY */}
            <VStack
                spacing={4}
                w={[300, 400, 600]}
            >
                <FormControl isInvalid={formik.touched.title && formik.errors.title}>
                    <InputGroup>
                        <InputLeftElement
                            children={<MdTitle size={18} color='gray' />}
                        />
                        <Input
                            type='text'
                            placeholder='Ingresá un titulo'
                            name='title'
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </InputGroup>
                    <FormHelperText>El titulo debe ser corto ej: Encontre/Busco a Firulais</FormHelperText>
                    <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.description && formik.errors.description}>
                    <Textarea
                        placeholder='Descripción'
                        name='description'
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.location && formik.errors.location}>
                    <Select
                        placeholder='Departamento'
                        name='location'
                        value={formik.values.location}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option>Luján de cuyo</option>
                    </Select>
                    <FormErrorMessage>{formik.errors.location}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.image && formik.errors.image}>
                    <InputGroup>
                        <InputLeftElement
                            children={<MdImage size={18} color='gray' />}
                        />
                        <Input
                            type='file'
                            accept='.png,.jpg,.jpeg'
                            name='image'
                            onChange={(e) => {
                                const files = e.target.files
                                const myFiles = Array.from(files)
                                formik.setFieldValue('image', myFiles[0])
                            }}
                            onBlur={formik.handleBlur}
                        />
                    </InputGroup>
                    <FormErrorMessage>{formik.errors.image}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.phone && formik.errors.phone}>
                    <InputGroup>
                        <InputLeftAddon
                            children='+54'
                        />
                        <Input
                            type='tel'
                            placeholder='Número de contacto'
                            name='phone'
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </InputGroup>
                    <FormHelperText>Ingresá un numero sin el código de país ej: 261XXXXXXX</FormHelperText>
                    <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                </FormControl>

                <Button
                    colorScheme='green'
                    disabled={formik.isSubmitting}
                    onClick={formik.handleSubmit}
                >
                    Publicar
                </Button>
            </VStack>
        </Stack >
    )
}