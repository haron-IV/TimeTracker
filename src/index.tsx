import React from 'react'
import ReactDOM from 'react-dom'
import { Normalize } from 'styled-normalize'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { DB } from './services'

const db = new DB() //TODO: perhaps it should be moved
const space = db.getDbSpace()
console.log(space)
ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
