import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Contact from './componants/contact'
import Products from './componants/products'
import Welcome from './componants/welcome'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' componant={Welcome}/>
        <Route path='/products' componant={Products}/>
        <Route path='/contact' componant={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
