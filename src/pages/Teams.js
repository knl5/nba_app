import React, { useEffect, useState } from 'react';

import { PageContainer } from '../components/styledComponents';
import { Team, Menu } from '../components';
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
          <Team key={team.id} team={team}/>
        ))
        } 
      </PageContainer>
      
      
      
    </div>
        
    
  );
  
} 
export default Teams;

