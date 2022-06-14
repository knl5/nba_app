import React, { useState, useEffect } from 'react';

import { getGamesApi } from '../api';
import { Game, Menu } from '../components';
import { PageContainer } from '../components/styledComponents';

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
    <PageContainer flex={true}>
      <Menu />
      {games && games.map(game => (
        <Game key={game.id} game={game}/>
      ))}
    </PageContainer>
  );
}

export default Games;