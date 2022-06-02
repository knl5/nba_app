import React, { useState, useEffect } from 'react';

import { getGamesApi } from '../api';
import { Game, Menu } from '../components';

export function Games() {
  const [games, setGames] = useState(null);

  useEffect(() => {
    getGamesApi()
      .then(result => {
        setGames(result.data.data);
      })
      .catch(e =>
        console.error(e)
      );
  }, []);
	
  return(
    <div>
      <Menu />
      {games && games.map(game => (
        <Game key={game.id} game={game}/>
      ))}
    </div>
  );
}

export default Games;