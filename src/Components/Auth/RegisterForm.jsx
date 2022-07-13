import React from 'react'
import { Stack, VStack, FormControl, Input, Button, FormErrorMessage, Text, Link } from '@chakra-ui/react'
import FormHeader from '../FormHeader'
import { useFormik } from 'formik'
import { AuthSchema } from './AuthScheme'
import { Link as RouterLink } from 'react-router-dom'

export default function RegisterForm() {

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            email: '',
            profilePicture: '',
            password: '',
            repeatPassword: ''
        },
        validationSchema: AuthSchema,
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
            spacing={4}
            padding={[4, 4, 6, 8]}
        >
            {/* HEADER */}
            <FormHeader
                title='Crear cuenta'
                subtitle='Creá una cuenta y administrá todas tus publicaciónes.'
            />
            {/* BODY */}
            <VStack
                spacing={4}
            >
                <FormControl isInvalid={formik.touched.name && formik.errors.name}>
                    <Input
                        name='name'
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
                        name='profilePicture'
                        type='file'
                        onChange={(e) => {
                            const files = e.target.files
                            const myFiles = Array.from(files)
                            formik.setFieldValue('profilePicture', myFiles[0])
                        }}
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

                <FormControl isInvalid={formik.touched.repeatPassword && formik.errors.repeatPassword}>
                    <Input
                        name='repeatPassword'
                        type='password'
                        placeholder='Repetir contraseña'
                        value={formik.values.repeatPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.repeatPassword}</FormErrorMessage>
                </FormControl>

                <Button
                    size='lg'
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
                        to='/'
                    >
                        <Button colorScheme='blue' variant='link'>Iniciar sesión</Button>
                    </Link>
                </Text>
            </VStack>
        </Stack>
    )
} 