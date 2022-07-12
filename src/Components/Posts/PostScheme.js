import * as Yup from 'yup'

export const postScheme = Yup.object().shape({
    title: Yup.string().required('Campo obligatorio'),
    description: Yup.string().required('Campo obligatorio'),
    location: Yup.string().required('Campo obligatorio'),
    image: Yup.string().required('Campo obligatorio'),
    phone: Yup.number()
        .required('Campo obligatorio')
        .min(8, 'Mínimo 8 caracteres')
})