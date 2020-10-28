import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Van from './components/Van';
import Login from './components/Login';
import Menu from './components/Menu';
import Noticias from './components/Noticias';
import Videos from './components/Videos';
import Eventos from './components/Eventos';
import Noticia from './components/Noticia';
import Evento from './components/Evento';
import Video from './components/Video';

function App() {

  return (
    <Router>
    <div className="container mt-3">
      <Van /> 
        <Switch>
          <Route path="/" exact> <Login /> </Route>
          <Route path="/Menu"> <Menu /> </Route>
          <Route path="/Noticias/:id">  <Noticia /> </Route>
          <Route path="/Noticias"> <Noticias /> </Route>
          <Route path="/Video/:id"> <Video /> </Route>
          <Route path="/Videos"> <Videos /> </Route>
          <Route path="/Evento/:id"> <Evento /> </Route>
          <Route path="/Eventos"> <Eventos /> </Route>
        </Switch> 
    </div>
  </Router>
  );
}

export default App;
