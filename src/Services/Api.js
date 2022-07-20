import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const getAllPost = () => {
    return axiosInstance.get('posts')
        .then(res => res.data)
        .catch(error => console.log(error))
}

export const getPostById = id => {
    return axiosInstance.get(`posts/${id}`)
        .then(res => res.data)
        .catch(error => console.log(error))
}