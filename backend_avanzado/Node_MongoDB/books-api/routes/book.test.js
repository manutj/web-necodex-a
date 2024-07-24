import testServer from "../utils/testServer";
import books from "./bookRoutes"
import mongoose from "mongoose";

const request = testServer(books)

beforeEach(async ()=>{
    const url = 'mongodb+srv://manu:yUpHq19066DsTOkt@testdevf.miyxbpt.mongodb.net/'
    await mongoose.connect(url, {useNewUrlParser: true})
})

describe("[routes / api/v1/books]", ()=>{
    it("should return a response with status 200", async () => {

        const expected = 200

        const {status: result} = await request.get("/api/v1/books")

        expect(result).toEqual(expected)
    })
})