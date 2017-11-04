
import express from 'express'
import handler from '../utilities/handler'
import Renderer from '../utilities/renderer'

import React from 'react'
import App from '../../frontend/App'

import users from '../controllers/users'

const router = express.Router()

router.get('/home', (req, res) => {
    const defaultUserId = '59fcce804bf0c71af2867ded'

    users.getUser(defaultUserId, (error, result) => {
        const userProfile = result || {}

        const initialState = {
            profile: userProfile
        }

        const renderer = new Renderer(initialState, req.path)
        res.status(200).send(renderer.appContent)
    })
})

// MARK: Default Route

router.get('/*', (req, res) => {
    const initialState = { }

    const renderer = new Renderer(initialState, req.path)
    res.status(200).send(renderer.appContent)
})

export default router