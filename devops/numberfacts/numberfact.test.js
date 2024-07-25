const getRandomNumberFact = require('./')
const getRandomNumberService = require('./service')

jest.mock("./service")

beforeEach(()=>{
    getRandomNumberService.mockClear()
})

test("should return random number fact", async ()=>{
    getRandomNumberService.mockReturnValueOnce({text: "1375 is the year that Margaret I of Denmark becomes Regent of Denmark after the death of her father Valdemar IV on October NaNth."})
    const numberFact = await getRandomNumberFact()
    expect(numberFact.text).toBe("1375 is the year that Margaret I of Denmark becomes Regent of Denmark after the death of her father Valdemar IV on October NaNth.")
    expect(getRandomNumberService).toHaveBeenCalledTimes(1)
})

// test.skip("should return random number fact", async ()=>{
//     getRandomNumberService.mockReturnValueOnce({text: "1375 is the year that Margaret I of Denmark becomes Regent of Denmark after the death of her father Valdemar IV on October NaNth."})
//     const numberFact = await getRandomNumberFact()
//     expect(numberFact.text).toBe("1375 is the year that Margaret I of Denmark becomes Regent of Denmark after the death of her father Valdemar IV on October NaNth.")
//     expect(getRandomNumberService).toHaveBeenCalledTimes(1)
// })

test("should return an error when the service throws an exeption", async ()=>{
    getRandomNumberService.mockReturnValueOnce(new Error('Error'))
    const numberFact = await getRandomNumberFact()
    expect(numberFact).toBeInstanceOf(Error)
    expect(getRandomNumberService).toHaveBeenCalledTimes(1)
})