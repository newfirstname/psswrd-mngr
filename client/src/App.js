import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import 'rsuite/dist/styles/rsuite-dark.css';

import NavbarComp from './components/NavbarComp';
import Home from './components/Home';
import Register from './components/Register';
import Passwords from './components/Passwords';

const App = () => {
  return (
    <>
      <NavbarComp />
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/passwords" component={Passwords} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
