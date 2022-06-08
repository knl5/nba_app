import React, { useEffect, useState } from 'react';

import { PlayerCard, PageContainer } from '../components/styledComponents';
import { Team } from '../components/Team';
import { Menu } from '../components';
import { getTeamsApi } from '../api';


export function Teams() {
  const [teams, setTeams] = useState();
  
  useEffect(() => {
    getTeamsApi()
      .then(t => {
        setTeams(t.data.data);
      })
      .catch(e =>
        console.error(e)
      );
  }, []);

  console.log(teams);
    
  
  return (
    <div>
      <Menu/>
      <PageContainer>
        {teams && teams.map(team =>(
          <PlayerCard key={team.id}>
            <Team  team={team}/>
          </PlayerCard>
        ))
        } 
      </PageContainer>
      
      
      
    </div>
        
    
  );
  
} 
export default Teams;

