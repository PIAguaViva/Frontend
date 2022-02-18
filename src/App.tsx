import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
        </div>
      </Switch>
      <Footer />
      
    </Router>
    
    
    
  );
}

export default App;
