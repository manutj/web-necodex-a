import express from 'express'
import supertest from 'supertest'

const testServer = (route) => { 
    const api = express()
    route(api)
   return supertest(api)
}

export default testServer