import React from 'react'
import FormHeader from '../FormHeader'
import {
    Button,
    FormControl,
    Input,
    Stack,
    VStack,
    Text,
    Link,
    FormErrorMessage
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useFormik } from 'formik'
import { LoginSchema } from './Schemas/LoginSchema'

export default function LoginForm() {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: LoginSchema,
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
                title='Iniciar sesión'
            />

            {/* BODY */}
            <VStack
                spacing={4}
            >
                <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                    <Input
                        type='email'
                        value={formik.values.email}
                        name='email'
                        placeholder='Email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.password && formik.errors.password}>
                    <Input
                        type='password'
                        value={formik.values.password}
                        name='password'
                        placeholder='Contraseña'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>

                <Button
                    size='lg'
                    colorScheme='green'
                    disabled={formik.isSubmitting}
                    onClick={formik.handleSubmit}
                >
                    Confirmar
                </Button>

                <Text>
                    ¿No tenés una cuenta?
                    <Link
                        as={RouterLink}
                        ms={1}
                        to='/register'
                    >
                        <Button colorScheme='blue' variant='link'>Registrate</Button>
                    </Link>
                </Text>
            </VStack>

        </Stack>
    )
}