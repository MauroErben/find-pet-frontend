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
import { useNavigate } from 'react-router-dom'
import { login } from '../../Services/userApi'

export default function LoginForm() {

    const navigate = useNavigate()
    const formik = useFormik({

        enableReinitialize: true,

        initialValues: {
            email: '',
            password: ''
        },

        validationSchema: LoginSchema,

        onSubmit: async (values, { setSubmitting, resetForm }) => {
            const response = await login(values)
            if (response) {
                localStorage.setItem('FIND_PET_ACCESS', response.token)
                setSubmitting(false)
                resetForm()
                navigate('/', { replace: true }) // replace es para borrar el historial de navigación y no poder volver atrás
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
                title='Iniciar sesión'
            />

            {/* BODY */}
            <VStack
                spacing={4}
                w={[300, 400, 600]}
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