import * as Yup from 'yup'

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']
const IMAGE_MAX_SIZE = 5000000 // 5MB

export const AuthSchema = Yup.object().shape({
    name: Yup.string().required('Campo obligatorio'),

    email: Yup.string()
        .email('Email invalido')
        .required('Campo obligatorio'),

    profilePicture: Yup.mixed()
        .test("FILE_SIZE", "La imagen debe ser menor a 5mb.",
            value => !value || (value && value.size <= IMAGE_MAX_SIZE))
        .test("FILE_FORMAT", "La imagen debe tener formato .jpg, .jpeg o .png",
            value => !value || (value && SUPPORTED_FORMATS.includes(value.type))),

    password: Yup.string()
        .trim()
        .min(6, 'La contraseña debe contener al menos 6 caracteres')
        .required('Campo obligatorio'),

    repeatPassword: Yup.string()
        .required('Campo obligatorio')
        .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
})  