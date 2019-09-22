import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './home/header';
import HomeContainer from './home/home_container';

const App = () => (
  <div className = 'main'>
  	<Switch>
  		<Route path="/" component = { Header } />
  	</Switch>
    <Switch>
      <Route exact path="/" component = { HomeContainer } />
      <Route path="/:uuid" component = { HomeContainer } />
    </Switch>
  </div>
);

export default App;
