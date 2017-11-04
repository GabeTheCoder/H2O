
import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import App from './App'

const serverState = window.serverState
delete window.serverState

const Container = () => {
    return (
        <BrowserRouter>
            <App initialState={serverState} serverLoaded={false} />
        </BrowserRouter>
    )
}

ReactDOM.hydrate(<Container />, document.getElementById('root'))
