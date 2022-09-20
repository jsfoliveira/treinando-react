import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import User from './pages/NomeComMap';
import { joao,  users } from './data/dados';
import NomeSemMap from './pages/NomeSemMap';
import Pokedex from './pages/Pokedex';
import { Pokemon } from './pages/Pokemon';
import pokemon from './data/pokemon';
import { Form } from './pages/Form';

class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
       <Switch>
        <Route exact path="/form" component={ Form }/>
        <Route exact path="/joao" render={ () => <NomeSemMap dados={ joao } /> } />
        <Route exact path="/pokedex" component={ Pokedex }/>
        <Route exact path="/user" render={ () => users.map((user) => <User user={ user }/>)} />
        <Route exact path="/pokemon" render={ () => pokemon.map((pokemon) => <Pokemon pokemon={ pokemon } />)} />
       </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
