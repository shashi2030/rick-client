import React, { Component } from 'react';
import {
  Switch,
  Route,
  Router
} from "react-router-dom";
import Login from '../Login';
import Register from '../Register';
import AuthRoute from '../../presentation/AuthRoute/AuthRoute';
import Home from '../Home';
import history from '../../../history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <AuthRoute path="/home" exact component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App;
