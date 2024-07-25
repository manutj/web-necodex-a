const getRandomNumberService = require("./service/index")

const getRandomNumberFact = async () => {

    const randomNumberFact = getRandomNumberService()
    //console.log(getRandomNumberService)
    return randomNumberFact
}

module.exports = getRandomNumberFact