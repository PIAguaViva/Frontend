import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import AboutUs from './pages/aboutUs/AboutUs';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import Contato from './pages/contato/Contato';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight:"100vh"}}>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/temas'>
            <ListaTema />
          </Route>
          <Route path='/posts'>
              <ListaPostagem />
            </Route>
            <Route exact path='/formularioPostagem'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioPostagem/:id'>
            <CadastroPost />
          </Route>
          <Route path='/deletarPostagem/:id'>
            <DeletarPostagem />
          </Route>
          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>

          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path='/contato'>
            <Contato />
          </Route>
          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>
          <Route exact path='/formularioTema/:id'>
            <CadastroTema />
          </Route>
          <Route path='/deletarTema/:id'>
            <DeletarTema />
          </Route>


        </div>
      </Switch>
      <Footer />

    </Router>



  );
}

export default App;
