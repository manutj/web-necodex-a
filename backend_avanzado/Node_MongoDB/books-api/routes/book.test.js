import testServer from "../utils/testServer";
import books from "./bookRoutes"

const request = testServer(books)

describe("[routes / api/v1/books]", ()=>{
    it("should return a response with status 200", async () => {

        const {status: result} = await request.get("api/v1/books")

        expect(result).toEqual(expected)
    })
})