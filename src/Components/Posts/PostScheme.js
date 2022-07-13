import * as Yup from 'yup'

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']
const IMAGE_MAX_SIZE = 5000000 // 5MB
const PHONE_REG_EXP = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const postScheme = Yup.object().shape({
    title: Yup.string().required('Campo obligatorio'),
    description: Yup.string().required('Campo obligatorio'),
    location: Yup.string().required('Campo obligatorio'),
    image: Yup.mixed()
        .required('Imagen requerida')
        .test("FILE_SIZE", "La imagen debe ser menor a 5mb.",
            value => !value || (value && value.size <= IMAGE_MAX_SIZE))
        .test("FILE_FORMAT", "La imagen debe tener formato .jpg, .jpeg o .png",
            value => !value || (value && SUPPORTED_FORMATS.includes(value.type))),
    phone: Yup.string()
        .required('Campo obligatorio')
        .trim()
        .matches(
            PHONE_REG_EXP,
            'Debes igresar un celular válido'
        ),
})