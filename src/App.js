import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import User from './componentes/NomeComMap';
import { joao,  users } from './data/dados';
import NomeSemMap from './componentes/NomeSemMap';
import Pokedex from './componentes/Pokedex';
import { Pokemon } from './componentes/Pokemon';
import pokemon from './data/pokemon';
import { Form } from './componentes/Form';

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
