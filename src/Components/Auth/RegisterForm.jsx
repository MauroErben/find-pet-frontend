import React from 'react'
import { Stack, VStack, FormControl, Input, Button, FormErrorMessage, Text, Link } from '@chakra-ui/react'
import FormHeader from '../FormHeader'
import { useFormik } from 'formik'
import { RegisterSchema } from './Schemas/RegisterSchema'
import { Link as RouterLink } from 'react-router-dom'
import { register } from '../../Services/userApi'
import { useNavigate } from 'react-router-dom'

export default function RegisterForm() {
    const navigate = useNavigate();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            fullname: '',
            email: '',
            image: '',
            password: '',
        },
        validationSchema: RegisterSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            const response = await register(values)
            if (response) {
                alert(response?.message);
                localStorage.setItem('FIND_PET_ACCESS', response.token)
                setSubmitting(false)
                resetForm()
                navigate('/', { replace: true })
            }
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
                title='Crear cuenta'
                subtitle='Creá una cuenta para poder administrar y crear publicaciónes.'
            />
            {/* BODY */}
            <VStack
                spacing={4}
                w={[300, 400, 600]}
            >
                <FormControl isInvalid={formik.touched.name && formik.errors.name}>
                    <Input
                        name='fullname'
                        type='text'
                        placeholder='Nombre completo'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                    <Input
                        name='email'
                        type='email'
                        placeholder='Email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.profilePicture && formik.errors.profilePicture}>
                    <Input
                        name='image'
                        type='file'
                        value={formik.values.image}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.profilePicture}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.password && formik.errors.password}>
                    <Input
                        name='password'
                        type='password'
                        placeholder='Contraseña'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>

                <Button
                    colorScheme='green'
                    onClick={formik.handleSubmit}
                >
                    Confirmar
                </Button>
                <Text>
                    ¿Ya tenés una cuenta?
                    <Link
                        as={RouterLink}
                        ms={1}
                        to='/login'
                    >
                        <Button colorScheme='blue' variant='link'>Iniciar sesión</Button>
                    </Link>
                </Text>
            </VStack>
        </Stack>
    )
} 