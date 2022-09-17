import './global.css'
import './App.css';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import Sobre from './Sobre'
import Contato from './Contato'


export default function Header() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to='/Home'>Inicio</Link></li>
              <li><Link to='/Sobre'>Sobre</Link></li>
              <li><a href='/Contato'>Contato</a></li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path='/Contato' component={Contato} />
          <Route path='/Sobre' component={Sobre} />

        </Switch>
      </div>
    </>
  );
}