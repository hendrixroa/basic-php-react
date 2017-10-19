import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'

ReactDOM.render(
  <BrowserRouter>
    <Route path="" component={Home} />
  </BrowserRouter>,  
  document.getElementById('main')
)