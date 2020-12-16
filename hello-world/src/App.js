import React, { Component } from 'react'
import './App.css'
import ClickCounterTwo from './components/ClickCounterTwo'
import Counter from './components/Counter'
import HoverCounterTwo from './components/HoverCounterTwo'
import User from './components/User'

export class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <HoverCounterTwo />
        <ClickCounterTwo />
        <User render={(isLoggedIN) => isLoggedIN ? 'Amin' : 'Guest'} /> */}
        <Counter
          render={(count, incrementCounter) => (<ClickCounterTwo count={count} incrementCounter={incrementCounter} />)}
        />
        <Counter render={(count, incrementCounter) => (<HoverCounterTwo count={count} incrementCounter={incrementCounter} />)} />
      </div>
    )
  }
}

export default App
