import './App.css';
import Hero from './components/hero'
import Quiz from './components/quiz'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route path="/paintings">
          <h1>Todo:Paintings Grid</h1>
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
