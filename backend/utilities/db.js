
import express from 'express'
import mongodb from 'mongodb'

const mongoClient = mongodb.MongoClient
const databaseUrl = 'mongodb://localhost:27017/h20'

class DB {

    constructor() {
        mongoClient.connect(databaseUrl, (error, database) => {
            if (error) {
                return console.log('Error connecting to ' + databaseUrl)
            }

            this.users = database.collection('users')
        })
    }

    objectId(id) {
        return new mongodb.ObjectId(id)
    }

}

export default new DB()
