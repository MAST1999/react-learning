import React, { Component } from 'react'
import ParentComp from './components/ParentComp'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <ParentComp></ParentComp>
      </div>
    )
  }
}

export default App
