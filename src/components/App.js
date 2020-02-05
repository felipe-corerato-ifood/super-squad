import '../styles/index.css';

import CharactersList from './CharactersList';
import HeroesList from './HeroesList';
import React from 'react';
import SquadStats from './SquadStats';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>SuperSquad</h2>

        <div className="col-md-4">
          <CharactersList />
        </div>
        
        <div className="col-md-4">
          <HeroesList />
        </div>

        <div className="col-md-4">
          <SquadStats />
        </div>
      </div>
    );
  }
}

export default App;
