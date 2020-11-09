import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import browserHistory from './browserHistory';
import './App.css';
import './reset.css';

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </Router>
    );
  }
}

export default App;