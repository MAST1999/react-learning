import React, { Component } from 'react'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import Hero from './components/Hero'

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <ErrorBoundary>
          <Hero heroName='batman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='superman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='joker' />
        </ErrorBoundary>

      </div>
    )
  }
}

export default App
