const fetch = require('node-fetch')
const getRandomNumberService = require('./')

jest.mock('node-fetch')

test("should return a valid response", async ()=>{
fetch.mockReturnValueOnce({
    json: ()=> Promise.resolve({text: "test pass"})
})
const data = await getRandomNumberService()

expect(data.text).toBe("test pass")

})