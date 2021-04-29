import React from "react";
import {Route, Switch } from 'react-router-dom'
import Home from './components/Home/index.js'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}

export default App;
