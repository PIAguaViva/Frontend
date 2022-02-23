import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AboutUs from './pages/aboutUs/AboutUs';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import './App.css';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>
         
          <Route path="/about-us">
            <AboutUs />
          </Route>
        </div>
      </Switch>
      <Footer />
      
    </Router>
    
    
    
  );
}

export default App;
