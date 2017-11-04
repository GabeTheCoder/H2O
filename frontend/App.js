
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'

import Home from './Home'

class App extends Component {

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/home" exact render={props => <Home {...this.props} />} />
                </Switch>
            </div>
        )
    }

}

export default App
