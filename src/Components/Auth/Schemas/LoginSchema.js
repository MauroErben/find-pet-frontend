import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email invalido')
        .required('Campo obligatorio'),

    password: Yup.string()
        .trim()
        .required('Campo obligatorio'),
})  