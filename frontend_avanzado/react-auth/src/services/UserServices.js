import axios from "axios";

const BaseURL = 'https://ecommerce-json-jwt.onrender.com'

const registerUserService = (data) => axios.post(`${BaseURL}/register`, data)

const loginUserService = (data) => axios.post(`${BaseURL}/login`, data)

const getAllUserService = (token) => axios.get(`${BaseURL}/users`, {headers: {Authorization: `Bearer ${token}`}})

const getMeUserService = (token) => axios.get(`${BaseURL}/me`, {headers: {Authorization: `Bearer ${token}`}})


export{
    registerUserService,
    loginUserService,
    getAllUserService,
    getMeUserService
}