
import express from 'express'

import cors from './config/cors'
import gzip from './config/gzip'

import api from './api/index'
import client from './app/index'

const app = express()

app.use(cors)
app.use(gzip)
app.use(express.static('public'))

app.use('/api', api)
app.use('/', client)

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})
