import axios from "axios";

const BaseURL = 'https://ecommerce-json-jwt.onrender.com'

const createItemService = (token, data) => axios.post(`${BaseURL}/items`, data, {headers: {Authorization: `Bearer ${token}`}})


const getAllItemsService = () => axios.get(`${BaseURL}/items`)

const getOneItemService = (id) => axios.get(`${BaseURL}/items/${id}`)


export {
    createItemService,
    getAllItemsService,
    getOneItemService
}