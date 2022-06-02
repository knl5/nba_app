import React, { useEffect, useState } from 'react';

import { PageContainer, PageTitle, CardContainer, PlayerCard } from './styledComponents';
import {DisplayPlayer} from '../components/Player';
import getPlayersApi from '../api';


export function Player() {
  const [players, setPlayers] = useState();
  
  useEffect(() => {
    getPlayersApi()
      .then(p => {
        setPlayers(p.data.data);
      })
      .catch(e =>
        console.error(e)
      );
  }, []);
  
  console.log(players);
    
  
  return (
    <PageContainer>
      <PageTitle>NBAs Players</PageTitle>
      <CardContainer>
        {players && players.map(player =>(
          <PlayerCard key={player.id}>
            <DisplayPlayer  player={player}/>
          </PlayerCard>
        ))
        } 
      </CardContainer>
    </PageContainer>
  );
  
} 

export default Player;

