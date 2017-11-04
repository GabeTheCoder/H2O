
import express from 'express'
import handler from '../utilities/handler'

const router = express.Router()

import users from '../controllers/users'

router.get('/user/:user', (req, res) => {
    users.getUser(req.params.user, (error, result) => {
        handler.respondToResult(res, error, result)
    })
})

// MARK: Default Route

router.get('/*', (req, res) => {
    res.sendStatus(404)
})

export default router