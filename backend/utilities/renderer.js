
import React from 'react'
import { renderToString } from 'react-dom/server' 

import { StaticRouter } from 'react-router-dom'

import App from '../../frontend/App'

class Renderer {

    constructor(initialState, path = '') {
        const title = initialState.title || ''
        const description = initialState.description || ''

        const context = {}

        const Container = () => {
            return (
                <StaticRouter context={context} location={path}>
                    <App initialState={initialState} serverLoaded={true} />
                </StaticRouter>
            )
        }

        const renderedString = renderToString(<Container />)
        const jsonState = JSON.stringify(initialState).replace(/</g, '\\u003c')
        
        this.appContent = `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>${title}</title>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <meta name="description" content="${description}">
                    <link rel="stylesheet" type="text/css" href="css/main.css" />
                </head>
                <body>
                    <div id="root">${renderedString}</div>

                    <script>
                        window.serverState = ${jsonState}
                    </script>
                    <script src="index.js"></script>
                </body>
            </html>
        `
    }

}

module.exports = Renderer