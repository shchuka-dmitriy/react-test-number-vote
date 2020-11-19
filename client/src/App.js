import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import browserHistory from './browserHistory';
import './App.css';
import './reset.css';
import './assets/styles/react-confirm-alert.css';
import VotePage from "./pages/VotePage/VotePage";
import LogsPage from "./pages/LogsPage/LogsPage";

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/votePage' component={VotePage}/>
            <Route exact path='/logsPage' component={LogsPage}/>
          </Switch>
        </Router>
    );
  }
}

export default App;