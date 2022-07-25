import axios from "axios"

export const register = async (paylaod) => {
    try {
        const response = await axios.post('http://localhost:3001/users/register', paylaod)
        return response.data
    } catch (error) {
        alert(error.response.data.message)
        console.log(error)
    }
}

export const login = async (paylaod) => {
    try {
        const response = await axios.post('http://localhost:3001/users/login', paylaod)
        return response.data
    } catch (error) {
        alert(error.response.data.message)
        console.log(error)
    }
}