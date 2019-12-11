import React, {Fragment} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom'
import './App.css';
import {Home} from './components/Home'
import { About } from './components/About';
import { Contact } from './components/Contact';
import {Work} from './components/Work';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
             <Link to = "/">Home</Link>
          </li>
          <li>
             <Link to = "/about">About</Link>
          </li>
          <li>
             <Link to  = "/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = '/about' component = {About}/>
          <Route path = '/contact' component = {Contact} />
          <Route path = '/work' component = {Work}/>
      </Switch>
    </Router>
  );
}

export default App;
