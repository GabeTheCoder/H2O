
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Api from './Api'

import './Home.css'
import logo from './logo.svg'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            profile: props.initialState.profile,
            queryUserId: ''
        }

        this.fetchData()
    }

    fetchData = () => {
        if (this.props.serverLoaded) return
        if (this.state.whateverProp) return

        // do your page loading, as we are client side...
    }

    fetchUserData = () => {
        const requestParams = {
            path: '/user/' + this.state.queryUserId
        }

        Api.request(requestParams, (error, user) => {
            if (error) return this.showError()
            this.setState({ profile: user })
        })
    }

    showError = () => {
        alert('Error Fetching')
    }

    changeUserId = (e) => {
        this.setState({ queryUserId: e.target.value })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <h1>{this.state.profile.name}</h1>
                <p>{this.state.profile.email}</p>

                <label>Enter another user id to fetch client side</label><br />
                <input value={this.state.queryUserId} onChange={e => this.changeUserId(e)} />

                <button onClick={this.fetchUserData}>Fetch Data</button>
            </div>
        )
    }

}

export default Home
