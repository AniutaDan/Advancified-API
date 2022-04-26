'use strict'
const baseUrl = 'https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/'
const Client = require('../api/api-client')

class Random {
async getRandomBook(){
    const response = await Client.get('books');
    return response;
}
}

module.exports = new Random