import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "https://knexpostgresnode.netlify.app/.netlify/functions/server/persons"
})

export default axiosInstance