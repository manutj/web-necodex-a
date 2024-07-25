const fetch = require('node-fetch')

const getRandomNumberService = async () => {
    try {
        const response = await fetch("http://numbersapi.com/random/year?json", {
            headers: {
                "Content-Type": "application/json"
            }

        })

       const data = response.json()

       return data
        
    } catch (error) {
        return error
    }
}

module.exports = getRandomNumberService