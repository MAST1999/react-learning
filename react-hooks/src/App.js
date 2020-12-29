import React, { useReducer } from 'react'
import './App.css';
import DataFetchingState from './components/DataFetchingState';

function App() {
  return (
    <div className="App">
      <DataFetchingState />
    </div>
  );
}

export default App;
