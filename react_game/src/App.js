import logo from './logo.svg';
import './App.css';
// import Form from "./components/Form"

import React, { Component } from 'react'
import Form from "./components/Form"
import './appStyles.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Frontend Problem Solving</h1>
      <Form/>
      </div>
    )
  }
}

export default App;
