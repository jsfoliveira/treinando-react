import React from 'react';
import User from './componentes/NomeComMap';
import { joao, users } from './data/dados';
import NomeSemMap from './componentes/NomeSemMap';
import Pokedex from './componentes/Pokedex';
import { Pokemon } from './componentes/Pokemon';
import pokemon from './data/pokemon';

class App extends React.Component {
  render() {

    return (
      <div>
        <NomeSemMap dados={ joao } />
        {users.map((user) => <User user={ user } />)}
        <Pokedex />
        {pokemon.map((pokemon) => <Pokemon pokemon={ pokemon } />)}
      </div>
    );
  }
}

export default App;
