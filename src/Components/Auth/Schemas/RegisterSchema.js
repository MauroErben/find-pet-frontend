import * as Yup from 'yup'

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']
const IMAGE_MAX_SIZE = 15000000 // 15MB

export const RegisterSchema = Yup.object().shape({
    fullname: Yup.string().required('Campo obligatorio'),

    email: Yup.string()
        .email('Email invalido')
        .required('Campo obligatorio'),

    image: Yup.mixed()
        .test("FILE_SIZE", "La imagen debe ser menor a 15mb.",
            value => !value || (value && value.size <= IMAGE_MAX_SIZE))
        .test("FILE_FORMAT", "La imagen debe tener formato .jpg, .jpeg o .png",
            value => !value || (value && SUPPORTED_FORMATS.includes(value.type))),

    password: Yup.string()
        .trim()
        .min(6, 'La contraseña debe contener al menos 6 caracteres')
        .required('Campo obligatorio'),
})  