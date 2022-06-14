import React, { useEffect, useState } from 'react';

import { PlayerCard, PageContainer } from '../components/styledComponents';
import { DisplayPlayer } from '../components/Player';
import { Menu } from '../components';
import { getPlayersApi } from '../api';


export function Players() {
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
    
  
  return (
    <div>
      <Menu/>
      <PageContainer flex={false} >
        {players && players.map(player =>(
          <PlayerCard key={player.id}>
            <DisplayPlayer  player={player}/>
          </PlayerCard>
        ))
        } 
      </PageContainer>
      
      
      
    </div>
        
    
  );
  
} 

export default Players;

