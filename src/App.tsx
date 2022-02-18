import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import Home from './pages/home/Home'
import './App.css';

function App() {
  return (
    <Router>

      <Switch>
        <div>
          <Route path='/home'>
            <Home />
          </Route>
        </div>
      </Switch>
      
    </Router>
    
    
    
  );
}

export default App;
