import React from 'react';
import User from './nomeComMapjs';
import { joao, users } from './data/dados';
import NomeSemMap from './nomeSemMap';

class App extends React.Component {
  render() {

    return (
      <div>
        <NomeSemMap dados={ joao } />
        {users.map((user) => <User user={ user } />)}
      </div>
    );
  }
}

export default App;
